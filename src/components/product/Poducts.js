// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import Categories from "../category/Categories";
import styles from "./Product.module.scss";
import data from "../slider/products.json";
import ProductItems from "./ProductItems";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { GET_PRODUCTS } from "../../redux/products";
// import { collection, getDocs} from "firebase/firestore";
// import { db } from "../../firebase/config";



const Products = () => {
  // const dispatch = useDispatch();
  // const [productData, setProductData] = useState([]);
  // const db2 = collection(db, "users")

  const data1 = data.products;
  const [filterList, setFilterList] = useState(data1);
  const [setSearch, setSearchTrue] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search1 = query.get('search')|| '';
  const finalInput = search1.toLocaleLowerCase();
  const searchResult = data1.filter((result) => result.category.includes(finalInput));



  const handleFilterInput = (e) => {
    let value = e.target.value;
    const result = data1.filter((data) => {
      if(value === "less expensive"){
        return data.price < 1000
      }else if(value ==="medium price"){
        return (data.price > 1000 && data.price < 1400)
      }else {
        return data.price > 1400
      }
    })
     console.log(result);
    setFilterList(result); 
};

  const filterFunction = (e) => {
    navigate(e.target.value ? `?search=${e.target.value}` : '');
    setFilterList(e.target.value);
  };

  const filter =(catItem) => {
    const result = data1.filter((dt) => {
      return dt.category === catItem;
    })
    setFilterList(result); 
  }

  const allCategories = () => {
   setFilterList(data1);
  }

  return (
    <>
      <main>
        <section className={styles["product-container"]}>
          <Categories filter={filter} allCategories={allCategories}/>
          <div className={styles.displays}>
            <div className={styles.displaysInline}>
              <div>
                <p> <span style={{fontWeight:"600"}}>{data1.length}</span> products found</p>
              </div>
              <div className={styles["input-div"]}>
                <input type="search" placeholder="search for items"/>
                <button className={styles.search} type="search" onClick={filterFunction}>
                  search
                </button>
              </div>
              <div>
                <span style={{ fontSize: "15px" }}>Sort by:</span>
                <select className={styles.select} onChange={handleFilterInput}>
                  <option>less expensive</option>
                  <option>medium price</option>
                  <option>high</option>
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
