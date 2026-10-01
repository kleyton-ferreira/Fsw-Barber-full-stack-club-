import { db } from "@/app/_lib/prisma"

// Nota de UMA barbearia (página de detalhes)
export async function getRatingSummary(barbershopId: string) {
    const { _avg, _count } = await db.review.aggregate({
        where: { barbershopId },
        _avg: { rating: true },
        _count: { rating: true },
    })

    return {
        average: _avg.rating ?? 0,
        count: _count.rating,
    }
}

// Nota de VÁRIAS barbearias de uma vez (listagens)
export async function getRatingsMap() {
    const ratings = await db.review.groupBy({
        by: ["barbershopId"],
        _avg: { rating: true },
        _count: { rating: true },
    })

    return new Map(
        ratings.map((r) => [
            r.barbershopId,
            { average: r._avg.rating ?? 0, count: r._count.rating },
        ])
    )
}