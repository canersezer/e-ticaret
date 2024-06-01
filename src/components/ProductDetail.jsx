import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice';





function ProductDetail() {
    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { price, image, title, description } = selectedProduct
    const [count, setCount] = useState(0)
    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        if (count > 0)
            setCount(count - 1)
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count,
        }
        dispatch(addToBasket(payload))
    }

    useEffect(() => {
        getProductById()
    }, [])



    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product));
            }
        })

    }
    return (
        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div style={{ marginRight: '40px' }}>
                <img src={image} width={300} height={500} />
            </div>
            <div>
                <h1 style={{ fontFamily: 'arial' }}>{title}</h1>
                <p style={{ fontFamily: 'arial', fontSize: '20px' }}>{description}</p>
                <h1 style={{ fontFamily: 'arial', fontSize: '30px', fontWeight: 'bold', color: 'lightblue' }}>{description}</h1>

                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <CiCirclePlus onClick={increment} style={{ fontSize: '40px', cursor: 'pointer' }} />
                    <span style={{ fontSize: '35px' }}>{count}</span>
                    <CiCircleMinus onClick={decrement} style={{ fontSize: '40px', cursor: 'pointer' }} />
                </div>

                <div>
                    <button onClick={addBasket} style={{
                        marginTop: '25px',
                        border: 'none',
                        padding: '10px',
                        backgroundColor: 'orange',
                        color: '#fff',
                        borderRadius: '8px',
                        fontFamily: 'arial'


                    }}>Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail