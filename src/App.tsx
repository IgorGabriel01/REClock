import PagesRoutes from "./services/PageRoutes";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <PagesRoutes />
        </BrowserRouter>
    )
}