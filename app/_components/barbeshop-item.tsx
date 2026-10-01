import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"

interface BarberShopItemProps {
  barbshop: Barbershop
  average: number
  count: number
}

const BarberShopItem = ({ barbshop, average, count }: BarberShopItemProps) => {
  const assessment =
    count > 0
      ? average.toLocaleString("pt-BR", {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        })
      : "0"

  return (
    <Card className="group animated-border flex w-72 min-w-53.5 flex-col rounded-2xl p-2">
      <CardContent className="flex flex-1 flex-col gap-4 p-0">
        <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl">
          <Image
            alt={barbshop.name}
            fill
            className="rounded-2xl object-cover transition-transform duration-500 group-hover:scale-110"
            src={barbshop.imageUrl}
          />

          <Badge className="absolute top-2 left-2 z-10 flex items-center gap-1 rounded-full bg-black/50 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
            <StarIcon className="fill-primary text-primary size-4" />
            <p className="text-xs text-[13px]"> {assessment} </p>
          </Badge>
        </div>

        <div className="flex flex-1 flex-col gap-1 px-1">
          <h3 className="text-base font-bold">{barbshop.name}</h3>
          <p className="text-sm leading-snug text-gray-400">
            {barbshop.address}
          </p>
        </div>

        <div className="px-1 pb-2">
          <Button
            variant="secondary"
            className="h-12 w-full rounded-xl text-sm font-semibold"
          >
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberShopItem
