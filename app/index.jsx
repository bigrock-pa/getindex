import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap';
import { Provider } from 'react-redux';
import { store } from './reducers';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<Provider store={store}><App /></Provider>);