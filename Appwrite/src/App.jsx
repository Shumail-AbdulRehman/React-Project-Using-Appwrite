import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import authService from './appwrite/auth'
import { useDispatch } from "react-redux"
import { login,logout } from './store/authSlice'
import { Header,Footer } from './Components/index'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch=useDispatch();


  useEffect(()=>
  {
     authService.getCurrentUser()
    .then((userData)=>
    {
      if(userData)
      {
        dispatch(login({userData}))
      } else{
        dispatch(logout())
      }})
      .catch((error)=>
    {
      console.log("user couldnt logged in in app useeffect fucntion for auth")
    })
    .finally(()=>
    {
      setLoading(false)
    })

  },[])

  if(loading)
  {
    return (
      <div>
        Loading...
      </div>
    )
  }else
  {
    return(
      <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
         TODO : <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
    )
    
  }

  
}

export default App
