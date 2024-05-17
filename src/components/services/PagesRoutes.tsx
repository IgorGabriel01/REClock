import { Route, Routes } from "react-router-dom";
import Layout from "../../layout/AppLayout";
import { LayoutCadastro } from "../../layout/LayoutCadastro";
import { ResetPassLayout } from "../../layout/ResetPassLayout";
import { Home } from "../home/Home";



function PagesRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Layout />} />
            <Route path="/create-account" element={<LayoutCadastro />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reset-password" element={<ResetPassLayout />} />
        </Routes>
    );
}

export default PagesRoutes; 