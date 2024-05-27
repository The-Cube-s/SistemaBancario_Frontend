import { useState } from "react"
import { Login } from "../../Components/Login/Login"
import { Register } from "../../Components/Register/Register"

export const AuthPage = () => {
  const [isLogin, setIsLogin ] = useState(false)

  const handleAuthPage = ()=>{
    setIsLogin((prev)=> !prev)
  } 

    return (
    <div className="auth-container">
        {
            isLogin ? (
                <Login switchAuthHandler={handleAuthPage} />
            ) : (
                <Register switchAuthHandler={handleAuthPage} />
            )
        }
    </div>
    )
}
