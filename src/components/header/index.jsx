import { useCartContext } from "@/context/cart-context"
import { Link } from "react-router-dom"
import styles from "./styles.module.scss"

export const Header = () => {
    const {cartCount} = useCartContext()

    return (
        <div className={styles.header}>
            <Link to="/">VelezCommerce </Link>
            <h3>{cartCount}</h3>
        </div>
    )
}
