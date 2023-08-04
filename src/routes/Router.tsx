import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { PrivateRoutes } from "./PrivateRoutes"
import {useState,useEffect} from "react"


export const Router = () => {
    const [auth, setAuth] = useState<boolean>(true);

    useEffect(() =>{
    const token = localStorage.getItem('auth');
    if(token?.length === 32){
        setAuth(true);
    }
    else{
        setAuth(false);
    }
    })
    return (
        <BrowserRouter>
            <Routes>
            
                {
                    auth 
                        ? <Route path="/*" element={<PrivateRoutes />} />
                            
                        : <Route path="/" element={<LoginPage />} />
                }
                <Route path='/*' element={<Navigate to='/' replace />} />
            </Routes>
        </BrowserRouter>
    )
}