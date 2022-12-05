import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import styles from "./ProductDetails.module.scss";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const list = localStorage.getItem("productlist");
  const itemslist = JSON.parse(list);
  const arr = Array.from(itemslist);

  const item = arr.filter((cart) => Number(cart.id) === Number(id));
  const addproduct = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      <section className={styles.detailsContainer}>
      <h1 className={styles.heading}>product details</h1>
        {item.map((el) => {
          return (
            <>
              <div className={styles.wrapper}>
                <div className={styles.imgDiv}>
                  <img
                    src={el.image}
                    alt="details pic"
                    className={styles.img}
                  />
                </div>
                <div className={styles.detailsDiv}>
                  <h1 className={styles.h1}>{el.title}</h1>
                  <p className={styles.decrp}>{el.description}</p>
                  <p>
                    Brand :<span className={styles.decrp2}> {el.brand}</span>
                  </p>
                  <button
                    onClick={() => addproduct(el)}
                    className={styles.btn1}
                    id={item.id}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default ProductDetails;
