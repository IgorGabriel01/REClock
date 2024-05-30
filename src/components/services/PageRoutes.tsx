import { Route, Routes } from "react-router-dom";
import { Home } from "../../pages/home/Home";
import { Login } from "../../pages/login/Login";
import { CreateAccount } from "../../pages/cadastrar/CreateAccount";
import Navigation from "../navigation-menu/Navigation";
import { ResetPassword } from "../../pages/esqueceu-senha/ResetPassword";


function PagesRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/navigation" element={<Navigation />} />
        </Routes>
    );
}

export default PagesRoutes; 