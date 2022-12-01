import { VscDebugBreakpointLog } from "react-icons/vsc";
import styles from "./Category.module.scss";

const Categories = ({filter, allCategories}) => {
  return (
    <>
      <section className={styles["category-container"]}>
        <h2>Categories</h2>
        <ul className={styles.categoryList}>
          <li className={styles.filterList} onClick={()=> filter("laptops")}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} />
            laptops
          </li>
          <li className={styles.filterList} onClick={()=> filter("smartphones")}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon}/>
            phones
          </li>
          <li className={styles.filterList} onClick={()=> filter("home-decoration")}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} />
            home-decoration
          </li>
          <li className={styles.filterList} onClick={()=> filter("groceries")}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} />
           groceries
          </li>
          <li className={styles.filterList} onClick={()=> filter("fragrances")}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} />
            fragrances
          </li>
          <li className={styles.filterList}  onClick={()=> filter("skincare")}skincare>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} />
            skin care
          </li>
          <li className={styles.filterList} onClick={()=> allCategories()}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} />
            All products
          </li>
        </ul>
      </section>
    </>
  );
};

export default Categories;
