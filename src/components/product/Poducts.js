// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import Categories from "../category/Categories";
import styles from "./Product.module.scss";
import data from "../slider/products.json";
import ProductItems from "./ProductItems";
import { useState } from "react";
// import { GET_PRODUCTS } from "../../redux/products";
// import { collection, getDocs} from "firebase/firestore";
// import { db } from "../../firebase/config";



const Products = () => {
  // const dispatch = useDispatch();
  // const [productData, setProductData] = useState([]);
  // const db2 = collection(db, "users")

  const data1 = data.products;
  const [filterList, setFilterList] = useState(data1);

  const filter =(catItem) => {
    const result = data1.filter((dt) => {
      return dt.category === catItem;
    })
    // console.log(result);
    setFilterList(result); 
  }



  console.log(filterList);
  // useEffect((
  //   getData()
  // ),[])

  return (
    <>
      <main>
        <section className={styles["product-container"]}>
          <Categories filter={filter}/>
          <div className={styles.displays}>
            <div className={styles.displaysInline}>
              <div>
                <p>{data1.length} products found</p>
              </div>
              <div className={styles["input-div"]}>
                <input type="search" placeholder="search for items" />
                <button className={styles.search} type="search">
                  search
                </button>
              </div>
              <div>
                <span style={{ fontSize: "15px" }}>Sort by:</span>
                <select className={styles.select}>
                  <option>latest</option>
                  <option>latest</option>
                  <option>latest</option>
                </select>
              </div>
            </div>
            <ProductItems data1={filterList}/>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
