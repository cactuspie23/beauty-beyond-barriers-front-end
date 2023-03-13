import styles from './Product.module.css'

const Product = ({ user, product }) => {
  return (
    <main className={styles.container}>
      <img src='../../images/lipstick.png' alt='product' id={styles.product_img} />
      <div id={styles.title}>
        {/* <div id={styles.name}>{product.name}</div> */}
        <img src="../../images/universal-icon.png" alt='accessible-icon' id={styles.accessibility_icon} />
      </div>
      {/* <div id={styles.description}>{product.description}</div> */}
      <div id={styles.review}>
        <div>Stars</div>
        <div>Number of Reiviews</div>
      </div>
      {/* <div id={styles.price}>{product.price}</div> */}
    </main>
  )
}

export default Product
