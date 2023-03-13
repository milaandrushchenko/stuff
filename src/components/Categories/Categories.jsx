import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Categories.module.css";

export default function Categories({ title, categories, amount }) {
  const list = categories.filter((_, i) => i < amount);

  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <div className={styles.list}>
        {list?.map((category) => (
          <Link
            key={category.id}
            to={`/categories/${category.id}`}
            className={styles.item}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${category.image})` }}
            />
            <h3 className={styles.title}>{category.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
