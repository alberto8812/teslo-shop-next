/**
 * screen cuando esta vacio el carrito
 * 
 */

import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";


export default function () {
  return (
    <div className="flex justify-center h-[800px] items-center">
      <IoCartOutline size={80} className="mx-5"/>
      <div className="flex flex-col items-center">

        <h1 className="text-xl font-semibold">Tu carrito esta vacio</h1>
        <Link
        href='/'
        className="text-blue-500 text-4xl mt-2"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}