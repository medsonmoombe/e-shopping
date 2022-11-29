import styles from "./Slider.module.scss";
import { sliderData } from "./slider-data";

const Slider = () => {
  return (
    <>
      <section className={styles.container}>
        {sliderData.map((data) => 
          <div key={data.id}>
            <img style={{width: "200px", minHeight:"400px"}} src={data.img} alt="slider-image" />
          </div>
        )}
      </section>
    </>
  );
};

export default Slider;
