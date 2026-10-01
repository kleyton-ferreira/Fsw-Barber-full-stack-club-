import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { Badge } from "./_components/ui/badge"
import { Avatar, AvatarImage } from "./_components/ui/avatar"
import { db } from "./_lib/prisma"
import BarberShopItem from "./_components/barbeshop-item"
import { getRatingsMap } from "./_lib/reviews"

const page = async () => {
  const barbshops = await db.barbershop.findMany({})

  const ratingsMap = await getRatingsMap()

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, Kleyton</h2>
        <p>Terça-feira, 29 de Setembro.</p>
        <div className="mt-6 flex items-center gap-2">
          <Input placeholder="Faça sua busca..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>
        <div className="relative mt-6 h-37.5 w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="object-cover"
          />
        </div>

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          agendamentos
        </h2>

        <Card className="gap-0 overflow-hidden py-0">
          <CardContent className="flex p-0">
            {/* ESQUERDA */}
            <div className="flex flex-1 flex-col gap-4 p-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3 className="font-semibold">Corte de Cabelo</h3>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* DIREITA */}
            <div className="flex w-[110px] flex-col items-center justify-center border-l border-solid">
              <p className="text-sm">Outubro</p>
              <p className="text-2xl">06</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
          recomendados
        </h2>

        <div className="flex scrollbar-none gap-4 overflow-x-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <>
            {barbshops.map((barberItems) => {
              const rating = ratingsMap.get(barberItems.id) ?? {
                average: 0,
                count: 0,
              }
              return (
                <BarberShopItem
                  key={barberItems.id}
                  barbshop={barberItems}
                  average={rating.average}
                  count={rating.count}
                />
              )
            })}
          </>
        </div>
      </div>
    </div>
  )
}

export default page
