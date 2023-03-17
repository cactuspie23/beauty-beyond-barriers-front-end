import styles from './ProductDetails.module.css'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import * as productService from "../../services/productService"
import Switch from "react-switch";
import Product from '../../components/Product/Product';

const ProductDetails = ({ products, windowWidth }) => {
  const {id} = useParams()
  const [product, setProduct] = useState(null)
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await productService.show(id)
      setProduct(data)
    }
    fetchProduct()
  }, [id])

  const [isChecked, setIsChecked] = useState(false)
  
  const handleChange = ({ target }) => {
    setIsChecked(!isChecked)
  }

  if(!product) return <main>Loading...</main>
  
  return (
    <main className={styles.container}>
      <div id={styles.section1}>
        <div id={styles.product_descr}>
          <img src={product.imgUrl} alt={product.name} />
          {windowWidth >= 768 ?
          ''
          :
          <div id={styles.product_info}>
            <h1>{product.name}</h1>
            <div id={styles.stars}>
              <img src='../images/star.png' alt='star' />
              <img src='../images/star.png' alt='star' />
              <img src='../images/star.png' alt='star' />
              <img src='../images/star.png' alt='star' />
              <div></div>
            </div>
            <div>{product.shortDescription}</div>
            <div id={styles.icons}>
              <div className={styles.icons_col}>
                <div className={styles.icon}>
                  <img src="../images/universal-icon.png" alt='accessible-icons' />
                  <div>Accessible</div>
                </div>
                <div className={styles.icon}>
                  <img src="../images/grip-friendly.png" alt='accessible-icons' />
                  <div>Grip-Friendly</div>
                </div>
              </div>
              <div className={styles.icons_col}>
                <div className={styles.icon}>
                  <img src="../images/highly-pigmented.png" alt='accessible-icons' />
                  <div>Highly Pigmented</div>
                </div>
                <div className={styles.icon}>
                  <img src="../images/easy-applicator.png" alt='accessible-icons' />
                  <div>Easy Applicator</div>
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
              <img src='../../images/ProductDetails/color.png' alt="color" id={styles.color} />
              <select>
                <option>333 PERSUASIVE</option>
                <option>420 REBELLIOUS ROSE</option>
                <option>420 REBELLIOUS ROSE</option>
                <option>320 DEFIANT CORAL</option>
              </select>
            </div>
            <div>{product.size}  <b>${product.price}.00</b></div>
            <div id={styles.subscribe}>
              <b>AUTO SUBSCRIBE</b>
              <Switch onChange={handleChange} checked={isChecked} />
            </div>
            <div>E-Listener earn 15 points for each subscription order!</div>
            <div id={styles.qty_sec}>
              <div><b>QTY</b></div>
              <div id={styles.qty}>
                <button>-</button>
                <div>1</div>
                <button>+</button>
              </div>
              <button id={styles.add}>ADD TO BAG</button>
            </div>
            <div id={styles.afterpay}>
              <div><b>FREE STANDARD SHIPPING & RETURNS</b></div>
              <img src='../../images/ProductDetails/logo-afterpay-colour.png' alt="afterpay"  />
              <span>Shop now and pay later with 4 payments of $9.00</span>
              <div>SHARE</div>
            </div>
            <div>
              <div><b>BENEFITS</b></div>
              <div>Striking, longwear color in dimensional Creme finish.</div>
            </div>
            <div>
              <div><b>COVERAGE</b></div>
              <div>Medium to Full Coverage</div>
            </div>
            <div>
              <div><b>Finish</b></div>
              <div>Long lasting lipstick in Creme finish</div>
            </div>
          </div>
          }


          <div id={styles.product_info}>
            <div className={styles.dropdown}>
              <div className={styles.dropdown_title}>
                <h2>Product Details</h2>
                <div>-</div>
              </div>
              <div>
                {product.description}
              </div>
            </div>
            <div className={styles.dropdown}>
              <div className={styles.dropdown_title} onClick={() => setShowMore(!showMore)}>
                <h2>How To Use</h2>
                <div>{showMore ? '-' : '+'}</div>
              </div>
              {showMore ? 
                <div className={styles.use}>
                  <p>As someone who is legally blind, the most common question Alice gets is, "Why do you still wear makeup?" Watch this video to see her makeup routine and learn about her favorite products.</p>
                  <Link to='/tutorials'><p>LEARN MORE ON HOW TO USE OUR ACCESSIBLE PRODUCTS HERE.</p></Link>
                  <p>Alice's Lipstick Tutorial</p>
                  <Link to='/tutorials'>
                    <img src='../images/Tutorials/Alice.png' alt='Alice' />
                  </Link>
                </div>
                : 
              
                ''
              }
            </div>
            <div className={styles.dropdown}>
              <div className={styles.dropdown_title}>
                <h2>Ingredients</h2>
                <div>+</div>
              </div>
            </div>
          </div>
        </div>
        {windowWidth >= 768 ?
          <div id={styles.product_info}>
            <h1>{product.name}</h1>
            <div>
              <img src='../images/star.png' alt='star' />
              <img src='../images/star.png' alt='star' />
              <img src='../images/star.png' alt='star' />
              <img src='../images/star.png' alt='star' />
              <div>Read Reviews</div>
            </div>
            <div>{product.shortDescription}</div>
            <div id={styles.icons}>
              <div className={styles.icons_col}>
                <div className={styles.icon}>
                  <img src="../images/universal-icon.png" alt='accessible-icons' />
                  <div>Accessible</div>
                </div>
                <div className={styles.icon}>
                  <img src="../images/grip-friendly.png" alt='accessible-icons' />
                  <div>Grip-Friendly</div>
                </div>
              </div>
              <div className={styles.icons_col}>
                <div className={styles.icon}>
                  <img src="../images/highly-pigmented.png" alt='accessible-icons' />
                  <div>Highly Pigmented</div>
                </div>
                <div className={styles.icon}>
                  <img src="../images/easy-applicator.png" alt='accessible-icons' />
                  <div>Easy Applicator</div>
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
              <img src='../../images/ProductDetails/color.png' alt="color" />
              <select>
                <option>333 PERSUASIVE</option>
                <option>420 REBELLIOUS ROSE</option>
                <option>420 REBELLIOUS ROSE</option>
                <option>320 DEFIANT CORAL</option>
              </select>
            </div>
            <div>{product.size}  <b>${product.price}.00</b></div>
            <div id={styles.subscribe}>
              <b>AUTO SUBSCRIBE</b>
              <Switch onChange={handleChange} checked={isChecked} />
            </div>
            <div>E-Listener earn 15 points for each subscription order!</div>
            <div id={styles.qty_sec}>
              <div><b>QTY</b></div>
              <div id={styles.qty}>
                <button>-</button>
                <div>1</div>
                <button>+</button>
              </div>
              <button id={styles.add}>ADD TO BAG</button>
            </div>
            <div>
              <div><b>FREE STANDARD SHIPPING & RETURNS</b></div>
              <img src='../../images/ProductDetails/logo-afterpay-colour.png' alt="afterpay" id={styles.color} />
              <span>Shop now and pay later with 4 payments of $9.00</span>
              <div>SHARE</div>
            </div>
            <div>
              <div><b>BENEFITS</b></div>
              <div>Striking, longwear color in dimensional Creme finish.</div>
            </div>
            <div>
              <div><b>COVERAGE</b></div>
              <div>Medium to Full Coverage</div>
            </div>
            <div>
              <div><b>Finish</b></div>
              <div>Long lasting lipstick in Creme finish</div>
            </div>
          </div>
        : 
          ''
        }
      </div>

      <div id={styles.others}>
        {products.slice(0,3).map((product, i) => (
          <Product product={product} key={i} />
        ))}
      </div>
    </main >
  )
}

export default ProductDetails