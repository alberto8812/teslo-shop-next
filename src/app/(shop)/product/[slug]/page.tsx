/**
 * screen cuando esta vacio el carrito
 * 
 */

import { titleFont } from "@/app/config/fonts";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";




interface Props{
  params:{
    slug:string
  }
}


export default function ({params}:Props) {
  const {slug}=params;

  const product=initialData.products.find(product=>product.slug===slug);
  
  if(!product){
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3 ">

      <div className="col-span-1 md:col-span-2 ">
      {/* slideshow mobile */}
       <ProductMobileSlideshow 
       images={product.images} 
       title={product.title}

       className="block md:hidden"
       />
     {/* slideshow escritorio */}
       <ProductSlideshow 
       images={product.images} 
       title={product.title}
       className="hidden md:grid"
       />
      </div>
     {/* detalles */}
     <div className="col-span-1 px-5 ">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>

        <p className="text-lg mb-5">
          ${product.price}
        </p>

        {/* selecto de tallas */}
          <SizeSelector 
          selecdSize={product.sizes[0]}
          availableSizes={product.sizes}
          />
        {/* selector de cantidad */}

        <QuantitySelector quantity={2}/>

        {/* button */}
        <button 
        className="btn-primary my-5"
        >
          Agregar al carrito
        </button>

        {/* descripcion */}
        <h3 className="font-bold text-sm">Descripcion</h3>
        <p className="font-light">
          {
            product.description
          }
        </p>
     </div>
      
    </div>
  );
}