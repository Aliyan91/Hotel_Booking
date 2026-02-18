import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Hotels from './pages/Hotels'
import Rooms from './pages/Rooms'
import MyBookings from './pages/MyBookings'
import SingleRoom from './pages/SingleRoom'
import About from './pages/About'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'
import Footer from './components/Footer'
const App = () => {

  const location = useLocation()
  const ownerPath = location.pathname.includes('/owner')
  return (
    <div className='w-full min-h-screen mx-auto'>
      {
        !ownerPath && <Navbar />
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/rooms/:id" element={<SingleRoom />} />
      </Routes>
      {!ownerPath && <Footer />}
    </div>
  )
}

export default App