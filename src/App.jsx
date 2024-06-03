import { useState, useEffect } from 'react'
import { Login } from './Components/Login/Login'
import { Toaster } from "react-hot-toast"


function App() {
 
  
  return (
    <>
      <Login/>
      <Toaster position="bottom-right" reverseOrder={false}/>
    </>
  )
}

export default App
