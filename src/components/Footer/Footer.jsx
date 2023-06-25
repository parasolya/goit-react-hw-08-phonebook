import css from './Footer.module.css';

export const Footer = () => {
  return (
    <div className={css.footer}>
      <p>
        <span className={css.text}> Developed by</span>
        <a
          className={css.link}
          target="_blank"
          rel="noreferrer"
          href="https://github.com/parasolya"
        >
          parasolya
        </a>
      </p>
    </div>
  );
};
