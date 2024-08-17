import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from '../Header/Header';
import ManageEmployees from '../View/View';
import Add from '../Add/Add';
import NewEmployee from '../Form/Form';

const AppRoutes = () => { 
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Header />} />
                <Route path="/viewData" element={<ManageEmployees />} />
                <Route path="/addData" element={<Add />} />
                <Route path="/editData" element={<NewEmployee />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
