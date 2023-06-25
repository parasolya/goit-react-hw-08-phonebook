import { useDispatch } from 'react-redux';
import { register } from '../../redux/Auth/operations';
import css from './Register.module.css';
import { ToastContainer } from 'react-toastify';

export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
      <form className={css.register__container} onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className={css.register__input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name..."
        />
        <label>Email</label>
        <input
          className={css.register__input}
          type="email"
          name="email"
          placeholder="user@ukr.net"
          required
        ></input>
        <label>Password</label>
        <input
          className={css.register__input}
          type="password"
          name="password"
          required
          placeholder="***"
        />

        <button className={css.register__btn} type="submit">
          Register
        </button>
      </form>
    </>
  );
}
