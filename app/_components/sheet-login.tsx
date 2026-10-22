"use client"

import React from "react"

import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet"
import SidebarSheet from "@/app/_components/sidebar-sheet"
import { Button } from "./ui/button"
import { MenuIcon } from "lucide-react"
import LoginDialog from "./login-dialog"

const SheetLogin = () => {
  const [loginOpen, setLoginOpen] = React.useState(false)
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="secondary"
            className="bg-primary hover:bg-primary-foreground hover:text-primary absolute top-6 right-5 text-white"
          >
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SidebarSheet onLoginClick={() => setLoginOpen(true)} />
      </Sheet>
      <LoginDialog loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
    </>
  )
}

export default SheetLogin
