"use client"

import React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog"
import Image from "next/image"
import { Button } from "./ui/button"

interface LoginDialogProps {
  loginOpen?: boolean
  setLoginOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const LoginDialog = ({ loginOpen, setLoginOpen }: LoginDialogProps) => {
  return (
    <>
      <Dialog open={loginOpen} onOpenChange={setLoginOpen}>
        <DialogContent className="w-[86%]">
          <DialogHeader className="text-center">
            <DialogTitle>Faça login na plataforma</DialogTitle>
            <DialogDescription>
              Conecte-se usando sua conta do Google
            </DialogDescription>
          </DialogHeader>
          <Button className="gap-2 font-bold">
            <Image
              src="/google.svg"
              width={16}
              height={16}
              alt="Fazer login com o google"
            />
            Google
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default LoginDialog
