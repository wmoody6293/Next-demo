import styles from './styles/loading.module.css'

function Loading() {
  return (
    <div className={styles["loading-container"]}>
        <h2 className={styles["loading-font"]}>
            <span className={styles["loading-text"]}>L</span>
            <span className={styles["loading-text"]}>O</span>
            <span className={styles["loading-text"]}>A</span>
            <span className={styles["loading-text"]}>D</span>
            <span className={styles["loading-text"]}>I</span>
            <span className={styles["loading-text"]}>N</span>
            <span className={styles["loading-text"]}>G</span>
            <span className={styles["loading-text"]}>...</span>
        </h2>
    </div>
  )
}

export default Loading