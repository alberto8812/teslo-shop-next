import { Size } from "@/interfaces"
import clsx from "clsx"
import { FC } from "react"

interface Props{
    selecdSize:Size,
    availableSizes:Size[],
}

export const SizeSelector:FC <Props> = ({selecdSize,availableSizes}) => {



  return (
    <div className="my-5 ">
        <h3 className="font-bold mb-4">Tallas disponibles</h3>
        <div 
        className="flex "
        >
            {
                availableSizes.map(size=>(
                    <button
                    key={size}
                    className={
                        clsx(
                            "mx-2 hover:underline text-lg",
                            {
                              'underline':size===selecdSize
                            }
                        )
                    }
                    >
                        {
                            size
                        }
                    </button>
                ))
            }

        </div>
    </div>
  )
}
