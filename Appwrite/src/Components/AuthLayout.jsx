import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function AuthLayout({children,authentication=true}) {
   
    const navigate=useNavigate()
    const [loading,setLoading]=useState()
    const authStatus=useSelector((state)=> state.auth.status)

    useEffect(()=>
    {
        if(authentication && authStatus !== authentication){
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            navigate("/")
        }

    },[authentication,navigate,authStatus])
    return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default AuthLayout
