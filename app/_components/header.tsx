import Image from "next/image"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { CalendarIcon, HomeIcon, LogOutIcon, MenuIcon } from "lucide-react"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet"
import { quickSearchOptions } from "../_constants/search"
import { Avatar, AvatarImage } from "./ui/avatar"
import Link from "next/link"

const Header = () => {
  return (
    <Card>
      <CardContent className="flex flex-row items-center justify-between p-5">
        <Image alt="FSW Barber" src="/logo.png" height={22} width={120} />

        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent className="overflow-y-auto p-0">
            {/* TÍTULO */}
            <SheetHeader className="px-5 pt-5 pb-3 text-left text-lg font-bold">
              Menu
            </SheetHeader>

            {/* PERFIL */}
            <div className="flex items-center gap-3 border-b border-solid px-5 pb-3">
              <Avatar className="border-primary border-2">
                <AvatarImage src="https://images.unsplash.com/photo-1777827839146-d634aee2c991?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" />
              </Avatar>

              <div>
                <p className="font-bold">Kleyton Ferreira</p>
                <p className="text-muted-foreground text-xs">
                  kleytondev40@hotmail.com
                </p>
              </div>
            </div>

            {/* NAVEGAÇÃO */}
            <div className="flex flex-col gap-2 border-b border-solid px-5 py-3">
              {/* AQUI FECHA O SHEET QUANDO EU CLICAR NO BOTAO DE INICIO */}
              <SheetClose asChild nativeButton={false}>
                <Button className="justify-start gap-2" variant="ghost" asChild>
                  <Link href="/">
                    <HomeIcon size={18} /> Início
                  </Link>
                </Button>
              </SheetClose>
              <Button className="justify-start gap-2" variant="ghost">
                <CalendarIcon size={18} /> Agendamentos
              </Button>
            </div>

            {/* BUSCA RÁPIDA */}
            <div className="flex flex-col gap-2 border-b border-solid px-5 py-3">
              {quickSearchOptions.map((option, index) => (
                <Button
                  key={`${option.title}-${index}`}
                  className="justify-start gap-2"
                  variant="ghost"
                >
                  <Image
                    src={option.imageUrl}
                    height={18}
                    width={18}
                    alt={option.title}
                  />
                  {option.title}
                </Button>
              ))}
            </div>

            {/* SAIR */}
            <div className="flex flex-col px-5 py-5">
              <Button variant="ghost" className="justify-start gap-2">
                <LogOutIcon size={18} /> Sair da conta
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </CardContent>
    </Card>
  )
}

export default Header
