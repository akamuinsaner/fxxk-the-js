import { createHashHistory } from 'history';
import * as React from 'react';
import { Route, Router } from 'react-router';
import Data from './routes/data';
import Home from './routes/home';

const history = createHashHistory();

const Routes = ({

}) => {
    return (
        <Router history={history}>
            <Route path="/" exact component={Home} />
            <Route path="/data" exact component={Data} />
        </Router>
    );
};

export default Routes;
