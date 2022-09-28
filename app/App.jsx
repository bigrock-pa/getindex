import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./pages/Main";
import Blog from "./pages/Blog";
import Tools from "./pages/Tools";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Register from './pages/Register';
import Login from './pages/Login';
import PageAnalytics from './pages/PageAnalytics';
import Profile from './pages/Profile';
import Rating from './pages/Rating';
import Page404 from './pages/Page404';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthreducer } from './reducers/reposAuthreducer';

function App() {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.repos2.auth)
    const [email, setEmail] = useState('')

    useEffect(() => {
        (
            async () => {
                const response = await fetch('https://getindex.ru/back/api/V1/user', {
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                });

                const content2 = await response.json();
                setEmail(content2.email);
                dispatch(setAuthreducer(email));
            }
        )();
    });

    return (

        <BrowserRouter>

            <div className="wrapper d-flex flex-column justify-content-between">

                <Header />

                <div className="flex-grow-1">
                    <Routes>
                        <Route path="" element={<Main />}></Route>
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/tools" element={<Tools />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/analytic" element={<PageAnalytics />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/rating" element={<Rating />} />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </div>

                <Footer />

            </div>

        </BrowserRouter>
    );
}

export default App;
