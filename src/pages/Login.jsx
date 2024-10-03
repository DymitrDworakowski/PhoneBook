import { Helmet } from "react-helmet";
import  {LoginForm}  from "../components/LoginForm/LoginForm";
import Footer from "../components/Footer/Footer";
import css from './Login.module.css'

export default function Login() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      <Footer/>
    </div>
  );
}
