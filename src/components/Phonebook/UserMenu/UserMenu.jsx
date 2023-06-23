import css from './UserMenu.module.css';

const UserMenu = () => {
    return (
        <div className={css.userMenu}>
  <p>mango@mail.com</p>
  <button>Logout</button>
</div>
    )
};

export default UserMenu;