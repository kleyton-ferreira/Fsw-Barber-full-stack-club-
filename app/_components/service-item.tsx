import { BarbershopService } from "@prisma/client"
import Image from "next/image"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"

interface ServiceItemProps {
  service: BarbershopService
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card>
      <CardContent className="flex items-center gap-2 pt-2">
        <div className="relative max-h-[110px] min-h-[110px] max-w-[110px] min-w-[110px]">
          <div className="relative mb-2 h-27.5 w-27.5 overflow-hidden rounded-[8px] border border-slate-500 bg-red-400">
            <Image
              src={service.imageUrl}
              alt={service.name}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-2 p-2">
          <h2 className="text-sm font-bold"> {service.name} </h2>
          <p className="text-sm text-gray-400"> {service.description} </p>

          <div className="flex items-center justify-between">
            <p className="text-primary text-sm font-bold">
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(Number(service.price))}
            </p>
            <Button variant="secondary" size="sm">
              Reservar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ServiceItem
