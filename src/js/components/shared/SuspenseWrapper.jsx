import { Suspense } from 'react';
//components
import Loader from '@/js/components/UI/Loader';

const SuspenseWrapper = ({ showLoading = false, icon, children }) => (
  <Suspense fallback={!showLoading ? <></> : icon ? icon : <Loader />}>{children}</Suspense>
);

export default SuspenseWrapper;
