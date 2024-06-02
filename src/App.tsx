import PagesRoutes from "./services/PageRoutes";
import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "./services/ContextProvider";

export const App: React.FC = () => {
    return (
        <Provider>
            <BrowserRouter>
                <PagesRoutes />
            </BrowserRouter>
        </Provider>     
    )
}