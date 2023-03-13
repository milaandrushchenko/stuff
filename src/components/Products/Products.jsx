import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Products.module.css";

export default function Products({ title, style = {}, products, amount }) {
  const list = products.filter((_, i) => i < amount);

  return (
    <section className={styles.products} style={style}>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {list?.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className={styles.product}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${product.images[0]})` }}
            />
            <div className={styles.wrapper}>
              <h3 className={styles.title}>{product.title}</h3>
              <div className={styles.cat}>{product.category.name}</div>
              <div className={styles.ifo}>
                <div className={styles.prices}>
                  <div className={styles.price}>{product.price}$</div>
                  <div className={styles.oldPrice}>
                    {Math.floor(product.price & 0.8)}$
                  </div>
                </div>
                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} purchased
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
