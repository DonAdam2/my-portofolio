import { useCallback, useEffect, useRef, useState } from 'react';
//images
import spinner from '@/public/assets/images/spinner.gif';

const LazyImage = ({ src, alt, className, loaderIcon }) => {
  const [imgSrc, setImgSrc] = useState(loaderIcon ? loaderIcon : spinner),
    imageRef = useRef(null);

  const loadImage = useCallback(
    (element) => {
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
    },
    [src]
  );

  useEffect(() => {
    loadImage(imageRef.current);
  }, [loadImage]);

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
