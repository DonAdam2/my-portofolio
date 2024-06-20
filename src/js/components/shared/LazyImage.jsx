import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
//images
import spinner from '@/public/assets/images/spinner.gif';

const LazyImage = ({ src, alt, className, loaderIcon }) => {
  const [imgSrc, setImgSrc] = useState(loaderIcon ? loaderIcon : spinner),
    imageRef = useRef(null);

  useEffect(() => {
    loadImage(imageRef.current);
  }, []);

  const loadImage = (element) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting } = entry;
          if (isIntersecting) {
            setImgSrc(src);
            observer.unobserve(element);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    observer.observe(element);
  };

  return (
    <img
      ref={imageRef}
      style={{
        maxWidth: '100%',
      }}
      className={className}
      src={imgSrc}
      alt={alt}
    />
  );
};

export default LazyImage;
