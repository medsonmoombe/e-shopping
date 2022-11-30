import React from 'react'
import Products from '../../components/product/Poducts';
import Slider from '../../components/slider/Slider';
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <>
    <section className={styles.section}>
    <Slider/>
    <Products/>
    </section>
    </>
  )
}

export default Home