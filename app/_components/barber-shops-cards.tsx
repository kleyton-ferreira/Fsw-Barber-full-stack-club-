import { db } from "../_lib/prisma"
import { getRatingsMap } from "../_lib/reviews"
import BarberShopItem from "./barbeshop-item"

const BarberShopsICards = async () => {
  const barbshops = await db.barbershop.findMany({})

  const popularBarbshops = await db.barbershop.findMany({
    orderBy: {
      name: "desc",
    },
  })

  const ratingsMap = await getRatingsMap()

  return (
    <>
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

      <h2 className="mt-6 mb-3 text-xs font-bold text-gray-400 uppercase">
        Populares
      </h2>

      <div className="flex scrollbar-none gap-4 overflow-x-auto [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <>
          {popularBarbshops.map((barberItems) => {
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
    </>
  )
}

export default BarberShopsICards
