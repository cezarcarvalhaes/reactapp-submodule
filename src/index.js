import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'unstated';

const appRoot = document.getElementById('special-div');

render(<Provider><App {...appRoot.dataset} appRoot={appRoot} /></Provider>, appRoot);


