import Categories from "../category/Categories";
import styles from "./Product.module.scss";
import ProductItems from "./ProductItems";
import { useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { GET_PRODUCTS } from "../../redux/products";
import { collection, getDocs, snapshotEqual} from "firebase/firestore";
import { db } from "../../firebase/config";
import { useDispatch } from "react-redux";



const Products = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);
  const [filterList, setFilterList] = useState(false);
  const [data, setdata] = useState([])


  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      setProductData((prev)=> {
        return [...prev, doc.data()]
      });
    });
  }


useEffect(()=> {
  getData()
}, [])

  dispatch(GET_PRODUCTS(productData))
 

  const navigate = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search1 = query.get('search')|| '';
  const finalInput = search1.toLocaleLowerCase();
  const searchResult = productData.filter((result) => result.category.includes(finalInput));

  const handleFilterInput = (e) => {
    setFilterList(true)
    let value = e.target.value;
    const result = productData.filter((data) => {
      if(value === "less expensive"){
        return data.price < 1000
      }else if(value ==="medium price"){
        return (data.price > 1000 && data.price < 1400)
      }else {
        return data.price > 1400
      }
    })
    setdata(result); 
};

  const filterFunction = (e) => {
    navigate(e.target.value ? `?search=${e.target.value}` : '');
    setFilterList(e.target.value);
  };

  const filter =(catItem) => {
    setFilterList(true)
    const result = productData.filter((dt) => {
      return dt.category === catItem;
    })
    setdata(result);
  }

  const allCategories = () => {
   return setdata(productData);
  }

  return (
    <>
      <main>
        <section className={styles["product-container"]}>
          <Categories filter={filter} allCategories={allCategories}/>
          <div className={styles.displays}>
            <div className={styles.displaysInline}>
              <div>
                <p> <span style={{fontWeight:"600"}}>{filterList ? data.length : productData.length}</span> products found</p>
              </div>
              <div className={styles["input-div"]}>
                <input type="search" placeholder="search for items"/>
                <button className={styles.search} type="search" >
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
            <ProductItems data1={ filterList ? data : productData}/>
          </div>
        </section>
      </main>
    </>
  );
};

export default Products;
