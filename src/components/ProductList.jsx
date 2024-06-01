import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice'
import Item from './Item'



const ProductList = () => {

    const dispatch = useDispatch()
    const { products } = useSelector((store) => store.product)



    useEffect(() => {
        dispatch(getAllProducts())
    }, [])

    return (
        <div className='flex-row' style={{ flexWrap: 'wrap', marginTop: '24px' }}>

            {products.map((product) => (
                <Item key={product.id} product={product} />



            ))
            }
        </div>
    )
}

export default ProductList