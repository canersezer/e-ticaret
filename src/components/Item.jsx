import React from 'react'
import '../css/Item.css'
import { useNavigate } from 'react-router-dom'
function Item({ product }) {
    const { id, price, image, title, descriptions } = product
    const navigate = useNavigate()
    return (

        <div className='card'>
            <img className='image' src={image} alt="" />
            <div>
                <p style={{ textAlign: 'center', height: '40px' }}>{title}</p>
                <h4 style={{ textAlign: 'center' }}>{price}₺</h4>
            </div>
            <div>
                <button onClick={() => navigate('/product-details/' + id)} className='btn'>Detay</button>
            </div>
        </div>

    )

}

export default Item