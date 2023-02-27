import { useCartContext } from "@/context"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { accessibleOnClick } from "@/utils"
import styles from "./styles.module.scss"

export const Header = () => {
    const navigate =  useNavigate()
    const {cartCount, currentDetailId} = useCartContext()
    const {pathname} = useLocation()
    const isHome = pathname==='/'

    return (
        <div className={styles.header}>
            <Link to="/">VelezCommerce</Link>
            <nav className={styles.headerNav}>
                <ul>
                    <li
                    {...accessibleOnClick(()=>isHome ? null :navigate("/"))}
                     style={{color:isHome? "#6ba051":"black"}}>Home</li>
                    <i className="fa fa-chevron-right" />
                    <li 
                    {...accessibleOnClick(()=>(isHome && !!currentDetailId) ?  navigate(`/detail/${currentDetailId}`): null)}
                    style={{color:pathname.includes("/detail/")? "#6ba051":"black"}}>Detail</li>
                </ul>
            </nav>
            <div className={styles.headerCart}>
            <i className="fa fa-shopping-bag" />
            <h3>{cartCount ?? 0}</h3>
            </div>
        </div>
    )
}
