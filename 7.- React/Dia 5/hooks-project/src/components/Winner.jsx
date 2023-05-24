import styles from './Winner.module.css'

function Winner({ score }) {
  return <div className={styles.winner}>
    <div className="content">
      <h2>Enhorabuena! 🎉</h2>
      <p>Has ganado por {score} vez!</p>
    </div>
  </div>
}

export default Winner
