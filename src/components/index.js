import { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Context } from '../Context';

import Home from './Home';
import DetailPage from './DetailPage';
import PageNotFound from './commons/PageNotFound';

import './style.css';

export default function App(){
    const [bucket, setBucket] = useState({});

    const contextValue = useMemo(() => ({
        bucket,
        setBucket,
    }), [bucket])

    return (
        <BrowserRouter>
            <Context.Provider value={contextValue}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="product">
                        <Route path=":id" element={<DetailPage />} />
                    </Route>
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </Context.Provider>
        </BrowserRouter>
    )
}
