import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Products } from './pages/Products/Products'
import { Product } from './pages/Product/Product'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

import "./App.scss"

const Layout = () => {
  return (
    <div className='app'>
      <Header />
      {/* Layout children */}
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },
    ]
    // element: <Home />
  },
  // {
  //   path: "/products/:id",
  //   element: <Products />
  // },
  // {
  //   path: "/product/:id",
  //   element: <Product />
  // },
])

function App() {
  return (
    <div>
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  )
}

export default App