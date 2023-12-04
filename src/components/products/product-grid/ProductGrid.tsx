import React, { FC } from 'react'
import { Product } from '../../../interfaces/product.Interface';
import { ProductGridItem } from './ProductGridItem';

interface Props{
  products:Product[]
}

export const ProductGrid:FC <Props> = ({products}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3  gap-10 mb-10'>
        {
            products.map(product=>(
              
                <ProductGridItem key={product.slug} product={product}/>
            ))
        }
     
    </div>
  )
}
