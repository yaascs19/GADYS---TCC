import { useEffect } from 'react';

const useImagePreload = (imageUrls) => {
  useEffect(() => {
    const preloadImages = (urls) => {
      urls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    if (imageUrls && imageUrls.length > 0) {
      preloadImages(imageUrls);
    }
  }, [imageUrls]);
};

export default useImagePreload;