import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { PrivateRoutes } from "./PrivateRoutes"

type Status = 'checking' | 'authenticated' | 'no-authenticated'

let status: Status = 'no-authenticated'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {
                    status === 'authenticated'
                        ? <Route path="/*" element={<PrivateRoutes />} />
                        : <Route path="login" element={<LoginPage />} />
                }
                <Route path='*' element={<Navigate to='/login' replace />} />
            </Routes>
        </BrowserRouter>
    )
}