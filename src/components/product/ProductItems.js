// import { useState } from "react";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import { SET_INCART } from "../../redux/products";
// import { NavLink, useParams } from "react-router-dom";
// import Cart from "../../pages/cart/Cart";
import styles from "./ProductItems.module.scss";
import { Link } from "react-router-dom";


const ProductItems = ({ data1 }) => {

  localStorage.setItem("productlist", JSON.stringify(data1));
  const dispatch = useDispatch();

  const addproduct =(product)=> {
     dispatch(addToCart(product));
  }

  return (
    <>
      <div className={styles.card} id="product">
        {data1.map((item) => {
          return (
            <div className={styles["card-item"]} key={item.id}>
              <Link to={`product/${item.id}`}>
              <img className={styles.img} src={item.image} alt="products" />
              </Link>
              <div>
                <p className={styles.para}>${item.price}</p>
                <p className={styles.para2}>{item.description}</p>
                <button
                  onClick={() => addproduct(item)}
                  className={styles["product-btn"]}
                  id={item.id}
                >
                    Add to cart
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
