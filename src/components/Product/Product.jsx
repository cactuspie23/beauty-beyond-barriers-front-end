import styles from './Product.module.css'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  const getReviewNum = () => {
    let stars = []
    for(let i = 0;i < Math.floor(Math.random()*5)+1;i++){
      stars.push(<img src='images/star.png' alt='star' key={i} />)
    }
    return stars
  }


  return (
    <main className={styles.container}>
      <Link to={`/products/${product._id}`}>
        {/* <div > */}
          <img src={product.imgUrl} alt='product' id={styles.product_img} />
          <div id={styles.title}>
            <div id={styles.name}>{product.name}</div>
            <img src='../../images/universal-icon.png' alt='accessible-icon' id={styles.accessibility_icon} />
          </div>
          <div id={styles.review}>
            <div>
              {
                getReviewNum()
              }
            </div>
            <div>({Math.floor(Math.random()*1000)})</div>
          </div>
          <div id={styles.description}>{product.shortDescription}</div>
          <div id={styles.price}>${product.price}.00</div>
        {/* </div> */}
      </Link>
    </main>
  )
}

export default Product
