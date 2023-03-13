import styles from './Product.module.css'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <main className={styles.container}>
      <Link to={`/products/${product._id}`}>
        <img src={product.imgUrl} alt='product' id={styles.product_img} />
        <div id={styles.title}>
          <div id={styles.name}>{product.name}</div>
          <img src='../../images/universal-icon.png' alt='accessible-icon' id={styles.accessibility_icon} />
        </div>
        <div id={styles.description}>{product.shortDescription}</div>
        <div id={styles.review}>
          <div>Stars</div>
          <div>Number of Reiviews</div>
        </div>
        <div id={styles.price}>${product.price}.00</div>
      </Link>
    </main>
  )
}

export default Product
