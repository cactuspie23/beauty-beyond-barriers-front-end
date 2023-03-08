import styles from './ProductDetails.module.css'
import Product from "../../components/Product/Product"
// import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import * as productService from "../../services/productService"
import Switch from "react-switch";

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

  const [isChecked, setIsChecked] = useState(false)

  const handleChange = ({ target }) => {
    setIsChecked(!isChecked)
  }

  return (
    <main className={styles.container}>
      <div id={styles.section1}>
        <div id={styles.product_descr}>
          <img src='../../images/lipstick2.png' alt="lipstick" />
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
        <div id={styles.product_info}>
          <h1>Product Name</h1>
          <div>
            Stars / Num of reviews
            <div>Read Reviews</div>
          </div>
          <div>Description</div>
          <div id={styles.icons}>
            <div className={styles.icons_col}>
              <div className={styles.icon}>
                <img src="../images/universal-icon.png" alt='accessible-icons' />
                <div>Accessible</div>
              </div>
              <div className={styles.icon}>
                <img src="../images/grip-friendly.png" alt='accessible-icons' />
                <div>Accessible</div>
              </div>
            </div>
            <div className={styles.icons_col}>
              <div className={styles.icon}>
                <img src="../images/highly-pigmented.png" alt='accessible-icons' />
                <div>Accessible</div>
              </div>
              <div className={styles.icon}>
                <img src="../images/easy-applicator.png" alt='accessible-icons' />
                <div>Accessible</div>
              </div>
            </div>
          </div>
          <div id={styles.colors}>
            <ul>
              <li>ALL</li>
              <li>NUDE</li>
              <li>PINK</li>
              <li>CORAL</li>
              <li>RED</li>
              <li>MAUVE</li>
            </ul>
            <img src='../../images/color.png' alt="color" />
            <select>
              <option>333 PERSUASIVE</option>
              <option>420 REBELLIOUS ROSE</option>
              <option>420 REBELLIOUS ROSE</option>
              <option>320 DEFIANT CORAL</option>
            </select>
          </div>
          <div>Price</div>
          <div>AUTO SUBSCRIBE<Switch onChange={handleChange} checked={isChecked} /></div>
        </div>
      </div>
      <div id={styles.others}>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </main >
  )
}

export default ProductDetails