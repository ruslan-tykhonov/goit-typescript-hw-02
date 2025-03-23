import css from './ErrorMessage.module.css';

export default function ErrorMessage() {
  return (
    <div className={css.wrapper}>
      <h2 className={css.header}>Проблема завантаження зображень</h2>
      <p className={css.descr}>
        Будь-ласка, перевірте ваше інтернет з'єднання і спробуйте ще раз. Якщо
        помилка не зникне, можливо, зображення тимчасово недоступне.
      </p>
    </div>
  );
}
