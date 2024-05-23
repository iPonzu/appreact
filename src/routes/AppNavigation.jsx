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
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

function NotFound(){
    return(
    <>
        <h1>404 | Not Found</h1>
        <style>
            {`
                h1{
                    justify-content: center;
                    align-items: center;
                    background-color: #000000
                }
            `}
        </style>
    </>
    )
}
