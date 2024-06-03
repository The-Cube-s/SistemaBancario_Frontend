import { useState, useEffect } from 'react'
import { Login } from './Components/Login/Login'
import { Toaster } from "react-hot-toast"
<<<<<<< HEAD
import { testRequest } from './Services/apiAdmin'

function App() {
 
  useEffect(() => {
    const checkBackendConnection = async () => {
      const response = await testRequest();
      if (response.error) {
        console.log('Failed to connect to backend:', response.err);
      } else {
        console.log('Successfully connected to backend:', response.data);
      }
    };

    checkBackendConnection();
  }, []);
=======


function App() {
 
  
>>>>>>> origin/main
  return (
    <>
      <Login/>
      <Toaster position="bottom-right" reverseOrder={false}/>
    </>
  )
}

export default App
