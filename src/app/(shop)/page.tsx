import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const Product=initialData.products;


export default function Home() {
  return (
    <>
    <Title title="Tienda" subtitle="Todos los Productos"/>
     <ProductGrid products={Product}/>
    </>
  )
}
