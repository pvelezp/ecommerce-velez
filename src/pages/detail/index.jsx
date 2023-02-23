import { useParams } from "react-router-dom"
import { useGetProductById } from "@/services"
import { Description, Actions } from "./components"
import styles from "./styles.module.scss"

const Detail = () => {
    const {productId} = useParams()
    const {data, isLoading} = useGetProductById(productId)

    return (
        <div className={styles.productDetail}>
          {isLoading?"..." : <div className={styles.productDetailLeft}>
            <img src={data.imgUrl} alt={data.model} />
        </div>}
        <div className={styles.productDetailRight}>
         {isLoading?"..." : <Description data={data} /> }
         {isLoading?"..." : <Actions options={data.options} productId={productId} /> }
        </div>
        </div>
    )
}

export default Detail