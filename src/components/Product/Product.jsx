import styles from './Product.module.css'

const Product = ({ user }) => {
  return (
    <main className={styles.container}>
      <img src='../../images/lipstick.png' alt='product' />
      <div>Product Name</div>
      <div>Description</div>
      <div>
        <div>Stars</div>
        <div>Number of Reiviews</div>
      </div>
      <div>Price</div>
    </main>
  )
}

export default Product
