import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
//import meta image
import '@/public/assets/images/intro.png';
//register service worker
import registerServiceWorker from './serviceWorker/swRegistration';

import App from './App';
import './scss/styles.scss';

const container = document.getElementById('root'),
  root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

if ('requestIdleCallback' in window) {
  requestIdleCallback(() => registerServiceWorker());
} else {
  window.addEventListener('load', () => registerServiceWorker());
}
