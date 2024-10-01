import css from "./Home.module.css";
import { NavLink } from "react-router-dom";
import bookImage from "../img/2.jpg";
export default function Home() {
  return (
    <div>
      <div className={css.home_div}>
        <h1 className={css.h1_home}>Discover and connect with</h1>
        <p className={css.p_home}>Efficientily search and manage contact</p>
        <div>
          <NavLink className={css.link} to="/register">
            Register
          </NavLink>
        </div>
      </div>
      <div className={css.img_box}>
        <img src={bookImage} alt="book" className={css.img} />
      </div>
      <div className={css.quotation}>
        <h3>
          "ContactConnect made finding contacts effortless. Our connections grew
          by 50% and that's fantastic"
        </h3>
      </div>
    </div>
  );
}
