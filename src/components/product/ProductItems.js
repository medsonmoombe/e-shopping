import styles from "./ProductItems.module.scss";

const ProductItems = ({data1}) => {
  

  return (
    <>
    <div className={styles.card}>
    {data1.map((item) => {
      return (
        
    <div className={styles["card-item"]}>
      <img className={styles.img} src={item.images[0]} alt="products"/>
      <div>
        <p className={styles.para}>${item.price}</p>
        <p className={styles.para2}>{item.description}</p>
        <button className={styles["product-btn"]}>Add to cart</button>
      </div>
    </div>
      )
        })}
        </div>
    </>
  )
}

export default ProductItems