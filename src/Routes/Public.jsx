import { Routes, Route, Outlet, Navigate } from 'react-router-dom'
import Header from '../Layouts/Header/Header'


const Public = () => {
  return (
    <div>
      <ProductProvider>
      <Header />
      {/* <Routes>
        <Route path='/' element={<Outlet />}>
          <Route index element={<Products />} />
          <Route path='/product/:productID' element={<Product />} />
          
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/create-product' element={<CreateProduct />} />
        <Route path='/404' element={<Error404 />} />
        <Route path='*' element={<Navigate to='/404' />} /> 
      </Routes>    */ }
      </ProductProvider>
    </div>

  )
}

export default Public
