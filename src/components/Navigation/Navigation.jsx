import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={css.nav__section}>
      <ul className={css.nav__list}>
        <li className={css.nav__item}>
          <NavLink className={css.nav__link} to="/">
            Home
          </NavLink>
        </li>
        {/* {isLoggedIn && (<li className={css.nav__item}>
            <NavLink className={css.nav__link} to="/contacts">Contacts</NavLink>
          </li> ) 
          } */}
        <li className={css.nav__item}>
          <NavLink className={css.nav__link} to="/contacts">
            Contacts
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
