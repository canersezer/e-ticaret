import './App.css'
import Header from './components/Header'
import Container from '@mui/material/Container';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { calculate, setDrawer } from './redux/slices/basketSlice';
import { useEffect } from 'react';

function App() {

  const { products, drawer, totalAmount } = useSelector((store) => store.basket)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculate())
  }, [])


  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <RouterConfig />
        <Loading />
        <Drawer onClose={() => dispatch(setDrawer())} open={drawer} anchor='right' >
          {
            products && products.map((product) => {
              return (
                <div>
                  <div className='flex-column' style={{ textAlign: 'center', padding: '32px', border: '1px solid lightgray', margin: '4' }}>
                    <img src={product.image} width={50} height={50} />
                    <p style={{ width: '350px' }}>{product.title}({product.count})</p>
                    <p>{product.price}</p>
                    <button style={{ fontSize: '16px', background: 'red', color: '#fff', border: 'none', }}>Sil</button>
                  </div>
                  <p>Toptal Tutar : {totalAmount}</p>
                </div>
              )
            })
          }
        </Drawer>
      </Container>
    </>
  )
}

export default App
