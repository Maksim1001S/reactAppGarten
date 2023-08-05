import React, { useEffect } from 'react'
import "./App.css"
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import MainPage from "./pages/MainPage/MainPage"
import CategoriesPage from "./pages/CategoriesPage/CategoriesPage"
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage"
import CartPage from "./pages/CartPage/CartPage"
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import ProductsByCategoryPage from "./pages/ProductsByCategoryPage/ProductsByCategoryPage"
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage"
import SalesPage from "./pages/SalesPage/SalesPage"
import { getProducts } from './requests/products_req'
import { useDispatch, useSelector } from 'react-redux'
import { filterDisProducts } from './store/slice/discountedProductsSlice'
import Footer from './components/Footer/Footer'
import { getCategories } from './requests/categories_req'
import Preloader from './components/Preloader/Preloader'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  const categories = useSelector(state => state.categories)
  const disProducts = useSelector(state => state.disProducts)
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (products.status === "succeeded") {
      dispatch(filterDisProducts(products))
    }
  }, [products]);




  if (products.status === "succeeded" && categories.status === "succeeded" && disProducts.status === "succeeded") {
    return (
      <div>
        <Navbar />

        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/categories/all' element={<CategoriesPage />} />
          <Route path="/categories/:category" element={<ProductsByCategoryPage />} />
          <Route path='/products/all' element={<AllProductsPage />} />
          <Route path='/products/:id' element={<SingleProductPage />} />
          <Route path='/sales' element={<SalesPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>

        <Footer />
      </div>
    )
  }

  return (
    <Preloader />
  )


}

export default App