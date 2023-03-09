import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import * as React from 'react';
import axios from 'axios';
import {
    HomePage, PageNotFound, ErrorPage
} from './pages';
import { HOME_ROUTE, ERROR_ROUTE } from './constants/routes';
// import makeRequest from './utils/makeRequest';
// import { GET_ALL_CONTENTS } from './constants/apiEndPoint';
import ContentTypeContext from './context/contentTypeContext';

function App() {

    const [ContentType, setContentType] = React.useState();
    React.useEffect(() => {
        // makeRequest(GET_ALL_CONTENTS).then((response) => ()=>{
        //     console.log('sd',response.data);
        //     setContentType(response.data);
        // });
        // console.log('ContentType', ContentType);

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
                        <Route path={HOME_ROUTE} element={<HomePage />} />
                    
                        <Route path={ERROR_ROUTE} element={<ErrorPage />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </ContentTypeContext.Provider>

        </div>
    );
}

export default App;



{/* <ThemeContext.Provider value={value}>
    <Header />
    <Routes>
        <Route path={HOME_ROUTE} element={<HomePage />} />
        <Route path={EVENT_ROUTE} element={<EventPage />} />
        <Route path={ERROR_ROUTE} element={<ErroPage />} />

        <Route path="*" element={<PageNotFound />} />
    </Routes>
    <Footer />
</ThemeContext.Provider>; */}