// import { useDispatch, useSelector } from "react-redux";
// import { FaTrashAlt } from "react-icons/fa";
// import styles from "./Cart.module.scss";
// import {
//   addToCart,
//   CALCULATE_SUBTOTAL,
//   CALCULATE_TOTAL_QUANTITY,
//   CLEAR_CART,
//   DECREASE_CART,
//   removeFromCart,
// } from "../../redux/cartSlice";
// import { useEffect } from "react";

// const Cart = () => {
//   const cartItems = useSelector((state) => state.products.cartItems);
//   const cartTotalAmount = useSelector(
//     (state) => state.products.cartTotalAmount
//   );
//   const cartTotalQuantity = useSelector(
//     (state) => state.products.cartTotalQuantity
//   );
//   // const isLoggedIn = useSelector(selectIsLoggedIn);

//   const dispatch = useDispatch();
//   const cart = useSelector((state) => state.products.cartItems);

//   const remove = (item) => {
//     dispatch(removeFromCart(item));
//   };

//   const increaseCart = (cart) => {
//     dispatch(addToCart(cart));
//   };

//   const decreaseCart = (cart) => {
//     dispatch(DECREASE_CART(cart));
//   };

//   const clearCart = () => {
//     dispatch(CLEAR_CART());
//   };

//   useEffect(() => {
//     dispatch(CALCULATE_SUBTOTAL());
//     dispatch(CALCULATE_TOTAL_QUANTITY());
//   }, [dispatch]);

//   return (
//     <>
//       <section className={styles.cartSection}>
//         <div>
//           <h1 className={styles.cartHeading}>Shopping Cart</h1>
//           <table className={styles.tableContainer}>
//             <tr>
//               <th>Poduct</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total</th>
//               <th>Action</th>
//             </tr>
//             {cart.length === 0 ? "Shopping cart is empty" : ""}
//             {cart.map((item) => (
//               <tr style={{ marginBottom: "6rem" }}>
//                 <div className={styles.cartimgDiv}>
//                   <td className={styles.cartimgDiv}>
//                     <span className={styles.cartTitle}>{item.title}</span>
//                     <img
//                       className={styles.cartImg}
//                       src={item.image}
//                       alt="cart item"
//                     />
//                   </td>
//                 </div>
//                 <td className={styles.tdata}>${item.price}</td>
//                 <td className={styles.tdata}>
//                   <button
//                     className={styles.Qbtn}
//                     onClick={() => decreaseCart(item)}
//                   >
//                     -
//                   </button>
//                   {cartTotalQuantity}
//                   <button
//                     className={styles.QbtnL}
//                     onClick={() => increaseCart(item)}
//                   >
//                     +
//                   </button>
//                 </td>
//                 <td className={styles.tdata}>${cartTotalAmount}</td>
//                 <td className={styles.tdata}>
//                   <FaTrashAlt
//                     onClick={() => remove(item)}
//                     size={20}
//                     style={{ color: "red", cursor: "pointer" }}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </table>
//           {cartItems.length > 0 ? (
//             <button className={styles.clearAllBtn} onClick={clearCart}>
//               Clear Cart
//             </button>
//           ) : (
//             ""
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Cart;


import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  CALCULATE_SUBTOTAL,
  CALCULATE_TOTAL_QUANTITY,
  CLEAR_CART,
  DECREASE_CART,
  REMOVE_FROM_CART,
  SAVE_URL,
} from "../../redux/cartSlice";
import styles from "./Cart.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import Card from "../../components/card/Card";
import { selectIsLoggedIn } from "../../redux/slice/authSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  const cartTotalAmount = useSelector(
    (state) => state.products.cartTotalAmount
  );
  const cartTotalQuantity = useSelector(
    (state) => state.products.cartTotalQuantity)
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const navigate = useNavigate();

  const increaseCart = (cart) => {
    dispatch(addToCart(cart));
  };

  const decreaseCart = (cart) => {
    dispatch(DECREASE_CART(cart));
  };

  const removeFromCart = (cart) => {
    dispatch(REMOVE_FROM_CART(cart));
  };

  const clearCart = () => {
    dispatch(CLEAR_CART());
  };

  useEffect(() => {
    dispatch(CALCULATE_SUBTOTAL());
    dispatch(CALCULATE_TOTAL_QUANTITY());
    dispatch(SAVE_URL(""));
  }, [cartItems, dispatch]);

  const url = window.location.href;

  const checkout = () => {
    if (isLoggedIn) {
      navigate("/checkout-details");
    } else {
      dispatch(SAVE_URL(url));
      navigate("/login");
    }
  };

  return (
    <section className={styles.cartSection}>
      <div className={`container ${styles.table}`}>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <>
            <p>Your cart is currently empty.</p>
            <br />
            <div>
              <Link to="/#products">&larr; Continue shopping</Link>
            </div>
          </>
        ) : (
          <>
            <table className={styles.tableContainer}>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((cart, index) => {
                  const { id, title, price, image, cartQuantity } = cart;
                  return (
                    <tr key={id}>
                      <td>{index + 1}</td>
                      <td>
                        <p>
                          <b>{title}</b>
                        </p>
                        <img
                          src={image}
                          alt={title}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td className={styles.tdata}>{price}</td>
                      <td>
                        <div className={styles.Qdata}>
                          <button
                            className="--btn"
                            onClick={() => decreaseCart(cart)}
                          >
                            -
                          </button>
                          <p>
                            <b>{cartQuantity}</b>
                          </p>
                          <button
                            className="--btn"
                            onClick={() => increaseCart(cart)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className={styles.tdata}>{(price * cartQuantity).toFixed(2)}</td>
                      <td className={styles.icons}>
                        <FaTrashAlt
                          size={19}
                          color="red"
                          onClick={() => removeFromCart(cart)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className={styles.summary}>
              <button className={styles.clearAllBtn} onClick={clearCart}>
                Clear Cart
              </button>
              <div className={styles.checkout}>
                <div>
                  <Link to="/#products">&larr; Continue shopping</Link>
                </div>
                <br />
                <div cardClass={styles.card}>
                  <p>
                    <b> {`Cart item(s): ${cartTotalQuantity}`}</b>
                  </p>
                  <div className={styles.text}>
                    <h4>Subtotal:</h4>
                    <h3>{`$${cartTotalAmount.toFixed(2)}`}</h3>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;