import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'

// console.log('hellow world')

ReactDOM.render(
<HashRouter>
    {/* <div> */}
        <App />
    {/* </div> */}
</HashRouter> 
, document.getElementById('root'));
