import React from 'react'
import styles from "./Card.module.css"

const Card = ({src}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card_wrapper}>
        <img src={src} alt="card" />
        <div className={styles.overlay}>
          <div className={styles.content}>
            <hr />
            <div>
              <h4>Sed ut Perspiciatis</h4>
              <p>Branding, Web Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card
