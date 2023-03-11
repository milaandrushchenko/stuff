import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";
import LOGO from "../../images/logo.svg";

export default function Footer() {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="STUFF" />
        </Link>
      </div>
      <div className={styles.right}>
        Developed by{" "}
        <a
          href="https://reactrouter.com/en/main/start/tutorial"
          target="_blank"
          rel="noreferrer"
        >
          Andrushchenko
        </a>
      </div>
      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>

        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className="icon">
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  );
}
