import './App.css'
import Navbar from './componants/Navbar'
import Users from './componants/Users'
import Login from './componants/Login'
import { BrowserRouter, Route, Routes } from 'react-router'
import Profile from './componants/Profile'
import GoogleMap from './componants/GoogleMap'
import AdminPanel from './componants/AdminPanel'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
import EditUser from './componants/EditUser'
import CreateUser from './componants/CreateUser'

function App() {

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Users/>} />
        <Route path='/adminlogin' element= {<Login/>} />
        <Route path='/profile/:userid' element= {<Profile/>} />
        <Route path='/map' element= {<GoogleMap/>} />
        <Route path='/admin' element= {<AdminPanel/>} />
        <Route path='/edituser/:userid' element= {<EditUser/>} />
        <Route path='/createuser' element= {<CreateUser/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
