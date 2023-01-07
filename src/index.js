import React from "react";

import {createRoot} from 'react-dom/client';
import '../src/index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './Main';
import { Provider } from 'react-redux';
import { store } from './App/store';

const container  =document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Main/>
        </Provider>
    </React.StrictMode>)