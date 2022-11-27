import  ReactDOM  from "react-dom";
import styles from "./Loader.module.scss";
import loaderGif from "../../assets/images/loader.gif";

export const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
       <div className={styles.loader}>
        <img src={loaderGif} alt="loading"/>
       </div>
    </div>, document.getElementById("loader")
  )
}
