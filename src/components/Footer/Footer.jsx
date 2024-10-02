import PhoneIcon from "../../assets/icons/PhoneIcon.tsx";
import MailIcon from "../../assets/icons/MailIcon.tsx";
import LinkedinIcon from "../../assets/icons/LinkedinIcon.tsx";
import  css  from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.footer_container}>
      <div className={css.footer_connect}>
        <h2>Contactconnect</h2>
        <p>Effortless search for contact information.</p>
        <p>Connect with us:</p>
        <ul className={css.icons}>
          <li><PhoneIcon/></li>
          <li><MailIcon/></li>
          <li><LinkedinIcon/></li>
        </ul>
      </div>
      <div>
        <p>Feedback</p>
        <ul>
          <li>Contact</li>
          <li>Suggestion</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
