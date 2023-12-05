
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";
import { Product, Category } from '../../../../interfaces/product.Interface';
import { ProductGrid, Title } from "@/components";

/**
 * screen for onl admin 
 * 
 */
interface Props{
  params:{
    id:Category;
  }
}

export default function ({params}:Props) {
  const {id}=params;
  const product= initialData.products.filter(product=>product.gender===id);

  const label:Record<Category,string>={
    'men':'para hombre',
    'women':'paramujeres',
    'kid':'para niños',
    'unisex':'para Todos',
    
  }

  // if(id==='kids'){
  //   notFound();
  // }

  return (
    <>
              <Title title={`Articulos   ${label[id]}`} subtitle={id}/>
               <ProductGrid products={product}/>
 

    </>
  );
}