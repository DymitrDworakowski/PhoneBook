import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.form_container}>
      <img
        src="https://www.pngkit.com/png/full/387-3879685_user-account-icon-png.png"
        alt="User Icon"
        className={css.user_icon}
      />
      <div className={css.container}>
      <h1>Login</h1>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.login_button}>Login</button>
      </form>
      </div>
    </div>
  );
};
