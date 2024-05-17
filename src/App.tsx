import React from 'react';
import { BrowserRouter as BrowserRouter } from 'react-router-dom';
import PagesRoutes from './components/services/PagesRoutes';


const App: React.FC = () => {
    return(
        <BrowserRouter>   
            <PagesRoutes/>
        </BrowserRouter>     
    );
}

export default App;