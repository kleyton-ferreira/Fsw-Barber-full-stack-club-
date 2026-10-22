"use client"

import * as React from "react"
import Image from "next/image"
import { MenuIcon } from "lucide-react"

import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { Sheet, SheetTrigger } from "./ui/sheet"

import SidebarSheet from "./sidebar-sheet"
import LoginDialog from "./login-dialog"

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [loginOpen, setLoginOpen] = React.useState(false)

  return (
    <>
      <Card>
        <CardContent className="flex flex-row items-center justify-between p-5">
          <Image alt="FSW Barber" src="/logo.png" height={22} width={120} />

          {/* AQUI E O COMPONENTE PAI O SHEET ELE DECIDE COMO QUER RENDERIZAR O CONTEUDO - SheetContent */}
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SidebarSheet onLoginClick={() => setLoginOpen(true)} />
          </Sheet>
        </CardContent>
      </Card>

      {/* Fora do Sheet */}
      <LoginDialog loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
    </>
  )
}

export default Header
