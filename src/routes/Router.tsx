import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { PrivateRoutes } from "./PrivateRoutes"
import {useState, useEffect} from "react"

export const Router = () => {
    const [auth, setAuth] = useState<boolean>(false);

    useEffect(() =>{
    const token = localStorage.getItem('auth');
    if(token?.length === 32){
        setAuth(true);
    }
    },[])

    return (
        <BrowserRouter>
            <Routes>
                {
                    auth 
                        ? <Route path="/*" element={<PrivateRoutes />} />
                        : <Route path="login" element={<LoginPage />} />
                }
                <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>
        </BrowserRouter>
    )
}