// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
// import Signup from './pages/Signup/Signup'
// import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import Signin from './pages/Signin/Signin'
import BBB from './pages/BBB/BBB'
import Mission from './pages/Mission/Mission'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Footer from './components/Footer/Footer'
import Kits from './pages/Kits/Kits'
import Tutorials from './pages/Tutorials/Tutorials'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as productService from './services/productService'

// styles
import './App.css'

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(authService.getUser())
  const [products, setProducts] = useState([])
  const [windowWidth, setWindowWidth] = useState(1024)

  const getSize= () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getSize);
  }, []);

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  useEffect(() => {
    const fetchAllProducts = async () => {
      const productData = await productService.index()
      setProducts(productData)
    }
    fetchAllProducts()
  }, [])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} windowWidth={windowWidth} />} />
        {/* <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        /> */}
        <Route
          path="/signin"
          element={<Signin handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bbb"
          element={
            <BBB products={products} windowWidth={windowWidth} />
          }
        />
        <Route
          path="/mission"
          element={<Mission />}
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetails products={products} />
          }
        />
        <Route
          path="/kits"
          element={
            <Kits />
          }
        />
        <Route
          path="/tutorials"
          element={
            <Tutorials />
          }
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
