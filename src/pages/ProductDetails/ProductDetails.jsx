import styles from './ProductDetails.module.css'
import Product from "../../components/Product/Product"
// import { useParams } from 'react-router-dom'
// import { useState, useEffect} from 'react'
// import * as productService from "../../services/productService"


const ProductDetails = ({ user }) => {
  // const { id } = useParams()
  // const [product, setProduct] = useState({})

  // useEffect(() => {
  //   const fetchProduct = async () => {
  //     const data = await productService.show(id)
  //     setProduct(data)
  //   }
  //   fetchProduct()
  // }, [id, setProduct])

  return (
    <main className={styles.container}>
      <div id={styles.product}>
        <img src='../../images/lipstick.png' alt="lipstick" />
        <div id={styles.product_info}>
          <div className={styles.dropdown}>
            <div className={styles.dropdown_title}>
              <h2>Product Details</h2>
              <div>+</div>
            </div>
            <div>
              <b>Accessibility Features</b><br />
              Grip friendly: Lorem ipsum dolor sit amet consectetur.<br />
              Highly-pigmented: Lorem ipsum dolor sit amet consectetur.<br />
              Easy Applicator: Lorem ipsum dolor sit amet consectetur.<br /><br />

              Learn more about our accessibility products here.<br />
            </div>
            <br />
            <div>
              <b>Matte Finish</b><br />
              Lorem ipsum dolor sit amet consectetur. Aliquam morbi nulla sed et aliquet. Congue elit fringilla diam pulvinar ut sed.
            </div>
            <br />
            <div>
              <b>Packaging Details</b><br />
              Lorem ipsum dolor sit amet consectetur. Aliquam morbi nulla sed et aliquet. Congue elit fringilla diam pulvinar ut sed.
            </div>
          </div>
          <div className={styles.dropdown}>
            <div className={styles.dropdown_title}>
              <h2>How To Use</h2>
              <div>+</div>
            </div>
          </div>
          <div className={styles.dropdown}>
            <div className={styles.dropdown_title}>
              <h2>Ingredients</h2>
              <div>+</div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div id={styles.others}>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </main >
  )
}

export default ProductDetails