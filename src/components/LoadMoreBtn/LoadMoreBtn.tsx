import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onClick }) {
  return (
    <div className={css.btnWrapper}>
      <button className={css.btn} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
}
