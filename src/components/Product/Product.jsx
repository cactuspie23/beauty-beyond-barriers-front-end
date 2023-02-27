import styles from './Product.module.css'

const Product = ({ user }) => {
  return (
    <main className={styles.container}>
      <img src='../../images/lipstick.png' alt='product' id={styles.product_img} />
      <div id={styles.title}>
        <div id={styles.name}>Product Name</div>
        <img src='../../images/universal-icon.png' alt='accessible-icon' id={styles.accessibility_icon} />
      </div>
      <div id={styles.description}>Description</div>
      <div id={styles.review}>
        <div>Stars</div>
        <div>Number of Reiviews</div>
      </div>
      <div id={styles.price}>Price</div>
    </main>
  )
}

export default Product
