import './App.css'
import Navbar from './componants/Navbar'
import Users from './componants/Users'
import Login from './componants/Login'
import { BrowserRouter, Route, Routes } from 'react-router'
import Profile from './componants/Profile'
import GoogleMap from './componants/GoogleMap'
import AdminPanel from './componants/AdminPanel'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Users/>} />
        <Route path='/adminlogin' element= {<Login/>} />
        <Route path='/profile/:userid' element= {<Profile/>} />
        <Route path='/map' element= {<GoogleMap/>} />
        <Route path='/admin' element= {<AdminPanel/>} />

      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
