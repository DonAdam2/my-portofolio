import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

const LazyImage = ({ src, alt, className, loaderIcon, scrollableNode }) => {
  const loaderSrc = loaderIcon ? loaderIcon : 'https://www.eliananunes.com/images/lazy_loader.gif',
    [imgSrc, setImgSrc] = useState(loaderSrc),
    imageRef = useRef(null),
    loader = useMemo(() => new Image(), []);

  const elementInViewPort = () => {
    // getBoundingClientRect => returns the size of the given element and the position of it in relation to the view port
    const clientRect = imageRef.current.getBoundingClientRect();

    return (
      clientRect.top >= 0 &&
      clientRect.left >= 0 &&
      clientRect.bottom - 100 <= (window.innerHeight || document.documentElement.clientHeight) &&
      clientRect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const lazyLoad = useCallback(() => {
    if (elementInViewPort()) {
      setImgSrc(src);
    }
  }, [src]);

  useEffect(() => {
    lazyLoad();
  }, [lazyLoad]);

  const checkImage = useCallback(() => {
    if (loader.complete) {
      lazyLoad();
    }
  }, [lazyLoad, loader.complete]);

  useEffect(() => {
    if (scrollableNode) {
      //loader is used to run lazyLoad method on load (note: if we removed the loader functionality the lazyLoad function will be triggered only on scroll)
      loader.src = 'https://www.eliananunes.com/images/lazy_loader.gif';
      loader.addEventListener('load', checkImage);

      // add the lazyLoad method onscroll
      scrollableNode.onscroll = scrollableNode.addEventListener('scroll', lazyLoad);
    }

    return () => {
      if (scrollableNode) {
        // remove the lazyLoad method
        scrollableNode.removeEventListener('scroll', lazyLoad);
      }
    };
  }, [lazyLoad, loader, checkImage, scrollableNode]);

  return (
    <img
      ref={imageRef}
      style={{
        maxWidth: imgSrc === 'https://www.eliananunes.com/images/lazy_loader.gif' ? 300 : '100%',
      }}
      className={className}
      src={imgSrc}
      alt={alt}
    />
  );
};

export default LazyImage;
