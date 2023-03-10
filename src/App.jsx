import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import * as React from 'react';
import axios from 'axios';
import {
    HomePage,DashBoard, PageNotFound, ErrorPage,Register,Login
} from './pages';
import { HOME_ROUTE, ERROR_ROUTE } from './constants/routes';
import ContentTypeContext from './context/contentTypeContext';

function App() {

    const [ContentType, setContentType] = React.useState();
    React.useEffect(() => {
        const getContents =async()=>{
            const response = await axios('http://localhost:5050/contents');
            setContentType(response.data);
        };
        getContents();
    },[]);
    const value = { ContentType, setContentType };

    return (
        <div className="App">

            <ContentTypeContext.Provider value={value}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Register/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path={HOME_ROUTE} element={<HomePage />} />
                        <Route path="dashboard/:id" element={<DashBoard />} />
                        <Route path={ERROR_ROUTE} element={<ErrorPage />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </ContentTypeContext.Provider>

        </div>
    );
}

export default App;