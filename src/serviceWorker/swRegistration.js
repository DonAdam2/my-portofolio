import { Workbox } from 'workbox-window';

export default function registerServiceWorker() {
  if (process.env.NODE_ENV === 'production') {
    if ('serviceWorker' in navigator) {
      const wb = new Workbox('serviceWorker.js');

      /*wb.addEventListener('installed', (event) => {
        if (event.isUpdate) {
          if (confirm('New app update is available, Click ok to refresh')) {
            window.location.reload();
          }
        }
      });*/

      wb.register()
        .then(function (registration) {
          console.log('Service Worker Registered', registration);
        })
        .catch(function (err) {
          console.log('Service Worker Failed to Register', err);
        });
    }
  } else {
    return;
  }
}
