import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app';
import './index.less';

ReactDOM.render(
    <App compiler="typescript" library="react" />,
    document.getElementById('root'),
);
