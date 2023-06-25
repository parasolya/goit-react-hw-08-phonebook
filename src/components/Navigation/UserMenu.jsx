import css from './Navigation.module.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/Auth/selectors';
import { logOut } from '../../redux/Auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={css.user__list}>
      <p className={css.user__text}>Hello, {user.name} </p>
      <button className={css.user__btn} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
