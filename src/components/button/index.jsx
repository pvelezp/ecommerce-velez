import styles from "./styles.module.scss"

export const Button = ({children,fullWidth, ...rest}) => {
    return (
        <button {...rest} className={`${styles.button} ${fullWidth ? styles.fullWidth:''}`}>
            {children}
        </button>
    )
}
