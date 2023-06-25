import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/Auth/operations';
import css from './Login.module.css';
import { ToastContainer } from 'react-toastify';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        color="rgb(249, 248, 158)"
        pauseOnHover
        theme="colored"
      />
      <form className={css.login__container} onSubmit={handleSubmit}>
        <label className={css.login__label}>Email</label>
        <input
          className={css.login__input}
          type="email"
          name="email"
          placeholder="user@ukr.net"
          required
        ></input>
        <label className={css.login__label}>Password</label>
        <input
          className={css.login__input}
          type="password"
          name="password"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="***"
          required
        ></input>
        <button className={css.login__btn} type="submit">
          Login
        </button>
      </form>
    </>
  );
}
