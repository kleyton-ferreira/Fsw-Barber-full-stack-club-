import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Avatar, AvatarImage } from "./ui/avatar"

const BookingItens = () => {
  return (
    <>
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
          <div className="flex w-27.5 flex-col items-center justify-center border-l border-solid">
            <p className="text-sm">Outubro</p>
            <p className="text-2xl">06</p>
            <p className="text-sm">20:00</p>
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default BookingItens
