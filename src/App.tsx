import { Aside } from "./components/sub-components/sb-aside/Aside";
import { Login } from "./components/principal-components/pr-login/Login";
import { ResetPassword } from "./components/principal-components/pr-esqueceu-senha/ResetPassword";
import { CreateAccount } from "./components/principal-components/pr-cadastrar/CreateAccount";
import { Modal } from "./components/principal-components/pr-modal-sucesso/Modal";
import { Home } from "./components/principal-components/pr-home/Home";

import "./styles/global.css";

export const App: React.FC = () => {
    return (
        <>
            <Home />
        </>
    )
}