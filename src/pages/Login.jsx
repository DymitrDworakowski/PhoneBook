import { Helmet } from "react-helmet";
import  {LoginForm}  from "../components/LoginForm/LoginForm";
import Footer from "../components/Footer/Footer";

export default function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
      <Footer/>
    </div>
  );
}
