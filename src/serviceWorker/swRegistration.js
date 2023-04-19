import { Workbox } from 'workbox-window';

export default async function registerServiceWorker() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    const wb = new Workbox('serviceWorker.js');

    await wb.register();
  }
}
