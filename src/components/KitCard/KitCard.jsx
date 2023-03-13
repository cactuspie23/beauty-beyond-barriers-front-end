import styles from './KitCard.module.css'

const KitCard = (props) => {
  return (
    <main className={styles.container}>
      <img src={props.image} alt='kit' id={styles.kit_img} />
      <div id={styles.title}>
        <div id={styles.name}>{props.name}</div>
        <img src='../../images/universal-icon.png' alt='accessible-icon' id={styles.accessibility_icon} />
      </div>
      <div id={styles.description}>{props.shortDescription}</div>
      <div id={styles.review}>
        <div>
          <img src='images/star.png' alt='star' />
          <img src='images/star.png' alt='star' />
          <img src='images/star.png' alt='star' />
          <img src='images/star.png' alt='star' />
          <img src='images/star.png' alt='star' />
        </div>
        <div>({Math.floor(Math.random()*100)})</div>
      </div>
      <div>{props.description}</div>
      <div id={styles.price}>Yours with any ${props.price} purchase.*</div>
    </main>
  )
}

export default KitCard
