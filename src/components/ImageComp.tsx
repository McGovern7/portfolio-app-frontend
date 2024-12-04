import React from 'react';
declare var require: any;

const images = require.context('../assets', false, /\.(png|jpe?g|webp|svg)$/);

interface ImageProps {
  id?: string;
  ariaLabel?: string; 
  src: string;
  className: string;
  width?: number;
  height?: number;
  alt: string;
}

const ImageComp = ({ id, ariaLabel, src, className, width, height, alt }: ImageProps) => {
  let imageSrc;
  
  try {
    imageSrc = images(`./${src}`);
  } catch (err) {
    console.error(`Image ${src} not found`);
    return null; // Return null if the image doesn't exist
  };
  return (
    <img
      id={id}
      aria-label={ariaLabel}
      src={imageSrc}
      className={className}
      width={width}
      height={height}
      alt={alt}
      loading='lazy'
    />
  );
};

export default ImageComp;