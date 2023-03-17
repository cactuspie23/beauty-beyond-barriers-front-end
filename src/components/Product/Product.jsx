import styles from './Product.module.css'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Link to={`/products/${product._id}`}>
      <main className={styles.container}>
        <img src={product.imgUrl} alt='product' id={styles.product_img} />
        <div>
          <div id={styles.title}>
            <div id={styles.name}>{product.name}</div>
            <img src='../../images/universal-icon.png' alt='accessible-icon' id={styles.accessibility_icon} />
          </div>
          <div id={styles.review}>
            <div id={styles.stars}>
              <img src='/images/star.png' alt='star' />
              <img src='/images/star.png' alt='star' />
              <img src='/images/star.png' alt='star' />
              <img src='/images/star.png' alt='star' />
              <img src='/images/star.png' alt='star' />
            </div>
            <div>({Math.floor(Math.random() * 1000)})</div>
          </div>
          <div id={styles.description}>{product.shortDescription}</div>
          <div id={styles.price}>${product.price}.00</div>
        </div>
      </main>
    </Link>
  )
}

export default Product
