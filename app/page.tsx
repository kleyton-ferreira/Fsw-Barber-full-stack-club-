import { SearchIcon } from "lucide-react"
import Header from "./_components/header"
import { Button } from "./_components/ui/button"
import { Input } from "./_components/ui/input"
import Image from "next/image"
import { Card, CardContent } from "./_components/ui/card"
import { quickSearchOptions } from "./_constants/search"
import BookingItens from "./_components/booking-itens"
import BarberShopsICards from "./_components/barber-shops-cards"

const Home = async () => {
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

        {/* BUSCA RAPIDA */}
        <div className="mt-6 flex scrollbar-none gap-3 overflow-x-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((options, index) => (
            <Button
              className="gap-2 p-4"
              variant="secondary"
              key={`${options.title}-${index}`}
            >
              <Image
                src={options.imageUrl}
                width={16}
                height={16}
                alt={options.title}
              />
              {options.title}
            </Button>
          ))}
        </div>

        <div className="relative mt-6 h-37.5 w-full">
          <Image
            alt="Agende nos melhores com FSW Barber"
            src="/banner-01.png"
            fill
            className="object-cover"
          />
        </div>

        {/* COMPONENTS AGENDAMENTOS */}
        <BookingItens />

        {/* COMPONENTS BarberShopsItems */}
        <BarberShopsICards />
      </div>
      <footer>
        <Card className="mt-10">
          <CardContent>
            <p className="px-5 py-2 text-center text-xs text-slate-400">
              © 2026 Copyright <span className="font-bold">FSW Barber</span>
            </p>
          </CardContent>
        </Card>
      </footer>
    </div>
  )
}

export default Home
