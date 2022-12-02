import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Cart from "../../pages/cart/Cart";
import styles from "./ProductItems.module.scss";

const ProductItems = ({ data1 }) => {
  const [cart, setCart] = useState(false);
  // const [id, setId] = useState(0);
  const params = useParams();

  return (
    <>
      <div className={styles.card}>
        {data1.map((item) => {
          return (
            <div className={styles["card-item"]} key={item.id}>
              <img className={styles.img} src={item.image} alt="products" />
              <div>
                <p className={styles.para}>${item.price}</p>
                <p className={styles.para2}>{item.description}</p>
                <button
                  className={styles["product-btn"]}
                  id={item.id}
                >
                  <a style={{ color: "white" }} href="#">
                    Add to cart
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductItems;
