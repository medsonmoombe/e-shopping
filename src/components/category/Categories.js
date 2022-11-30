import { VscDebugBreakpointLog } from "react-icons/vsc";
import styles from "./Category.module.scss";

const Categories = ({filter}) => {
  return (
    <>
      <section className={styles["category-container"]}>
        <h2>Categories</h2>
        <ul className={styles.categoryList}>
          <li className={styles.filterList}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} />
            laptops
          </li>
          <li className={styles.filterList}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} onClick={()=> filter("smartphones")}/>
            phones
          </li>
          <li className={styles.filterList}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} />
            electronics
          </li>
          <li className={styles.filterList}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} />
            shoes
          </li>
          <li className={styles.filterList}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} />
            women clothes
          </li>
          <li className={styles.filterList}>
            <VscDebugBreakpointLog size={15} className={styles.catIcon} />
            men clothes
          </li>
        </ul>
      </section>
    </>
  );
};

export default Categories;
