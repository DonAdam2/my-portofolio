import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
//constants
import { createWrapperAndAppendToBody } from '@/js/constants/helpers';

const Portal = ({ children, wrapperElement, wrapperElementId }) => {
  const [wrapper, setWrapper] = useState(null);

  useEffect(() => {
    let element = document.getElementById(wrapperElementId);
    //use the following if you want to remove the created div after unmounting portal
    let systemCreated = false;
    // if element is not found with wrapperElementId or wrapperElementId is not provided,
    // create and append to body
    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendToBody(wrapperElement, wrapperElementId);
    }
    setWrapper(element);

    return () => {
      // delete the programmatically created element
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperElementId, wrapperElement]);

  // wrapper state will be null on the first render.
  if (wrapper === null) return null;

  return ReactDOM.createPortal(children, wrapper);
};

export default Portal;
