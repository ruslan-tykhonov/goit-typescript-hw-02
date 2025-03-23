import ImageCard from '../ImageCard/ImageCard';

import { useMemo } from 'react';

import css from './ImageGallery.module.css';

export default function ImageGallery({ images, onImageClick }) {
  const memoizedImages = useMemo(() => {
    return images.map(image => (
      <li className={css.galleryList} key={image.id}>
        <ImageCard image={image} onImageClick={() => onImageClick(image)} />
      </li>
    ));
  }, [images]);
  return (
    <>
      <ul className={css.gallery}>{images !== null && memoizedImages}</ul>
    </>
  );
}
