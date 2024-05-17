import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { SectionInfos } from './components/section/SectionInfos';
import { CreateAccount } from './components/form/CreateAccount';
import { ResetPassword } from './components/form/ResetPassword';
import { Title } from '@mui/icons-material';

const App: React.FC = () => {
    return(
        <Router> 
            <Routes> 
                <Route path='/' element={<SectionInfos title="Entre na sua conta"/>}/>
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Routes>
        </Router>
    );
}

export default App;