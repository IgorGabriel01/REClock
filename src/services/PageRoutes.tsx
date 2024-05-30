import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { CreateAccount } from "../pages/cadastrar/CreateAccount";
import { Login } from "../pages/login/Login";
import { ResetPassword } from "../pages/esqueceu-senha/ResetPassword";
import { Modal } from "../pages/sucesso-modal/Modal";
import { Navigation } from "../components/navigation-menu/Navigation";
import { Sobre } from "../pages/sobre/Sobre";
import { TermosPrivacidade } from "../pages/termos-privacidade/TermosPrivacidade";

function PagesRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/sucess-create-account" element={<Modal title="Conta criada" />} />
            <Route path="/sucess-reset-password" element={<Modal title="Senha alterada" />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/termos-privacidade" element={<TermosPrivacidade />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    );
}

export default PagesRoutes; 