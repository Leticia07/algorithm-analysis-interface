import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home';
import Complexity from './pages/Complexity';
import Search from './pages/Search';
import Sort from './pages/Sort';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/" exact />
            <Route component={Complexity} path="/complexity" exact />
            <Route component={Search} path="/search" exact />
            <Route component={Sort} path="/sort" exact />
        </BrowserRouter>
    );
}

export default Routes;