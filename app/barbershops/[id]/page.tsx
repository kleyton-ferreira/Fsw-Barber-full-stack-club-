import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeftIcon, MapPinIcon, MenuIcon, StarIcon } from "lucide-react"
import { Button } from "@/app/_components/ui/button"
import { db } from "@/app/_lib/prisma"
import { getRatingSummary } from "@/app/_lib/reviews"

interface BarbershopsPageProps {
  params: Promise<{ id: string }>
}

const BarbershopsPage = async ({ params }: BarbershopsPageProps) => {
  const { id } = await params

  const barbershop = await db.barbershop.findUnique({
    where: { id },
  })

  if (!barbershop) return notFound()

  const { average, count } = await getRatingSummary(barbershop.id)

  const assessment =
    count > 0
      ? average.toLocaleString("pt-BR", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })
      : "0"

  return (
    <div>
      <div className="group relative h-62.5 w-full overflow-hidden">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          fill
          className="object-cover brightness-75 transition-transform duration-300"
        />
        {/* Overlay: transparente por padrão, escuro no hover */}
        <div className="absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-black/50" />

        <Button
          size="icon"
          variant="secondary"
          className="bg-primary hover:bg-primary-foreground hover:text-primary absolute top-6 left-5"
          asChild
        >
          <Link href="/">
            <ChevronLeftIcon />
          </Link>
        </Button>

        <Button
          size="icon"
          variant="secondary"
          className="bg-primary hover:bg-primary-foreground hover:text-primary absolute top-6 right-5 text-white"
        >
          <MenuIcon />
        </Button>
      </div>

      <div className="flex flex-col gap-2 border-b border-solid px-5 pt-6">
        <h1 className="text-xl font-bold">{barbershop.name}</h1>
        <p className="flex items-center gap-1 text-sm text-gray-400">
          <span>
            <MapPinIcon className="text-primary size-4 shrink-0" />
          </span>
          {barbershop.address}
        </p>

        {/* AVALIAÇOES */}
        <div className="mb-6 flex items-center gap-2">
          <StarIcon className="fill-primary text-primary size-4" />
          <p className="text-sm">
            {assessment}
            {count > 0 && (
              <span className="text-gray-400">
                {" "}
                ({count} {count === 1 ? "avaliação" : "avaliações"})
              </span>
            )}
          </p>
        </div>
      </div>
      {/* DESCRIPTION */}
      <div className="space-y-3 border-b border-solid px-5 pt-6">
        <h2 className="text-xs font-bold text-gray-400"> Sobre nós </h2>
        <p className="mb-6 text-justify text-sm"> {barbershop.description} </p>
      </div>
    </div>
  )
}

export default BarbershopsPage
