import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function AuthNav() {
  return (
    <div className={css.auth__section}>
      <ul className={css.auth__list}>
        <li className={css.auth__item}>
          <NavLink className={css.auth__link} to="/register">
            <button className={css.auth__btn}>Register</button>
          </NavLink>
        </li>
        <li className={css.auth__item}>
          <NavLink className={css.auth__link} to="/login">
            <button className={css.auth__btn}>Login</button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
