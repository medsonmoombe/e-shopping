import { useDispatch, useSelector } from "react-redux";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Cart.module.scss";
import { removeFromCart } from "../../redux/cartSlice";

const Cart = () => {
 const dispatch = useDispatch()
  const cart = useSelector((state) => state.products.cartItems);

  const remove = (item) => {
    dispatch(removeFromCart(item))
  }
  return (
    <>
      <section className={styles.cartSection}>
        <div>
          <h1 className={styles.cartHeading}>Shopping Cart</h1>
          <table className={styles.tableContainer}>
            <tr>
              <th>Poduct</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
            {(cart.length === 0) ? "Shopping cart is empty" : ""}
            {cart.map((item) => (
              <tr style={{ marginBottom: "6rem" }}>
                <div className={styles.cartimgDiv}>
                  <td className={styles.cartimgDiv}>
                    <span className={styles.cartTitle}>{item.title}</span>
                    <img
                      className={styles.cartImg}
                      src={item.image}
                      alt="cart item"
                    />
                  </td>
                </div>
                <td className={styles.tdata}>${item.price}</td>
                <td className={styles.tdata}></td>
                <td className={styles.tdata}>Germany</td>
                <td className={styles.tdata}>
                  <FaTrashAlt
                  onClick={() => remove(item)}
                    size={20}
                    style={{ color: "red", cursor: "pointer" }}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      </section>
    </>
  );
};

export default Cart;
