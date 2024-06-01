import React, { useState } from 'react';
import '../css/Header.css';
import { BsBasket } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawer } from '../redux/slices/basketSlice';




const Header = () => {

    const [theme, setTheme] = useState(false)

    const { products } = useSelector((store) => store.basket)

    const dispatch = useDispatch()

    const changeTheme = () => {
        const root = document.getElementById('root');
        setTheme(!theme);
        if (!theme) {
            root.style.backgroundColor = 'black'
            root.style.color = '#fff'
        }
        else {
            root.style.backgroundColor = 'white'
            root.style.color = 'black'
        }


    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: '24px' }}>
            <div className='flex-row'>
                <img className='logo' src="./src/images/logo.png" alt="logo" />
                <p className='logo-text'> Mavi E-ticaret Sitesi </p>
            </div>
            <div className='flex-row'>
                <input className='search-input' type="text" placeholder=' Ürün Ara ...' />
                <div>
                    {theme ?
                        <CiLight className='icon' onClick={changeTheme} /> : <FaMoon onClick={changeTheme} className='icon' />}

                    <Badge onClick={() => dispatch(setDrawer())} badgeContent={products.length} color="error">
                        <BsBasket className='icon' />

                    </Badge>


                </div>


            </div>
        </div>
    )
}

export default Header