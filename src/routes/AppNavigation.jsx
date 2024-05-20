import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../screens/Login";
import Home from "../screens/Home";
import Cadastro from "../screens/Cadastro";
import RecuperarSenha from "../screens/RecuperarSenha";



export default function AppNavigation(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />}/>
                <Route path="/recuperarsenha" element={<RecuperarSenha />}/>
            </Routes>
        </BrowserRouter>
    )
}
