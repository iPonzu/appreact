import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../screens/Login";
import Home from "../screens/Home";


export default function AppNavigation(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}
