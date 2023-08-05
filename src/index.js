import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import App from './App';
import {ContextProvider} from './contexts/ContextProvider';

ReactDOM.render(
    <ContextProvider><App/></ContextProvider>
, document.getElementById('root'));
//this line make sure to hook our application to react app
