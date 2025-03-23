import css from './ImageCard.module.css';

export default function ImageCard({ image, onImageClick }) {
  return (
    <div className={css.wrapper}>
      <img
        className={css.image}
        key={image.id}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => onImageClick(image.urls.full)}
      />
    </div>
  );
}
