import { useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './commons/Cart';
import './style.css';
import DetailPage from './DetailPage';
import { Context } from '../Context';

export default function App(){
    const [bucket, setBucket] = useState({});

    const contextValue = useMemo(() => ({
        bucket,
        setBucket,
    }), [bucket])

    return (
        <BrowserRouter>
            <Context.Provider value={contextValue}>
                <Cart />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="product">
                        <Route path=":id" element={<DetailPage />} />
                    </Route>
                </Routes>
            </Context.Provider>
        </BrowserRouter>
    )
}
