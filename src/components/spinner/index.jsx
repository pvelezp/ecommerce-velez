import styles from "./styles.module.scss"

export const Spinner = () => 
    <div data-testid="loader" className={styles.loadingContainer}>
        <div className={styles.loader} />   
    </div> 
