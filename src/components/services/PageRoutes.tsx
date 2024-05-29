import { Route, Routes } from "react-router-dom";
import { Home } from "../principal-components/pr-home/Home";
import { CreateAccount } from "../principal-components/pr-cadastrar/CreateAccount";
import { Login } from "../principal-components/pr-login/Login";
import { ResetPassword } from "../principal-components/pr-esqueceu-senha/ResetPassword";
import { Modal } from "../principal-components/pr-modal-sucesso/Modal";
import { Navigation } from "../sub-components/sb-navigation-menu/Navigation";

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
        </Routes>
    );
}

export default PagesRoutes; 