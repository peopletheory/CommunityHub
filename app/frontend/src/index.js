import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './shared/styles/buttons.css';
import "./shared/components/UIElements/Fancy-Button.css";
import "./shared/styles/button2.css";

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import App from './App'

// This is the ID of the div in your index.html file

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);