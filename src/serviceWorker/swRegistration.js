import { Workbox } from 'workbox-window';

export default function registerServiceWorker() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const wb = new Workbox('serviceWorker.js');

    wb.unregister();

    caches
      .keys()
      .then((cacheNames) => {
        cacheNames.forEach((cacheName) => {
          caches.delete(cacheName);
        });
      })
      .then(() => {
        wb.register();
      });
  }
}
