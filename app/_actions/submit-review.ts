// app/_actions/submit-review.ts
"use server"

import { db } from "@/app/_lib/prisma"
import { revalidatePath } from "next/cache"
// importe aqui a sua função de autenticação

export async function submitReview({
    barbershopId,
    rating,
    comment,
}: {
    barbershopId: string
    rating: number
    comment?: string
}) {
    const session = await getSession() // adapte à sua auth
    if (!session?.user) throw new Error("Não autenticado")

    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
        throw new Error("Nota inválida")
    }

    const userId = session.user.id

    const hasBooking = await db.booking.findFirst({
        where: { userId, date: { lt: new Date() }, service: { barbershopId } },
    })
    if (!hasBooking) throw new Error("Avaliação permitida só após uma reserva concluída")

    await db.review.upsert({
        where: { userId_barbershopId: { userId, barbershopId } },
        update: { rating, comment },
        create: { userId, barbershopId, rating, comment },
    })

    revalidatePath("/")
}