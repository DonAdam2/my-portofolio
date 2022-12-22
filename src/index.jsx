//import meta image
import '@/public/assets/images/intro.png';
// required for babel polyfills
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './scss/styles.scss';

const container = document.getElementById('root'),
  root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
