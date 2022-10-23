import { BrowserRouter,Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                {/* <Route path='*' element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter