import css from "./Home.module.css";
import { NavLink } from 'react-router-dom';
export default function Home() {
  return (
    <div>
    <div className={css.home_div}>
      <h1 className={css.h1_home}>Discover and connect with</h1>
      <p className={css.h1_home}>Efficientily search and manage contact</p>
    </div>
    <img src="/img/Image.png" alt="book" width={500} height={300}></img>
    <NavLink className={css.link} to="/register">
        Register
      </NavLink>
    </div>
  );
}
