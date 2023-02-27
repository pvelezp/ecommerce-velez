import { Header } from "@/components"
import styles from "./styles.module.scss"

export const MainLayout = ({children}) => {
    return (
        <div className={styles.layout}>
            <Header />
           <main className={styles.main}>
              {children}
           </main>
        </div>
    )
}
