import App from './app';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './models';

import './index.less';

ReactDOM.render(
    <Provider store={store}>
        <App compiler="typescript" library="react" />
    </Provider>,
    document.getElementById('root'),
);
