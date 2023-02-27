import { useParams } from "react-router-dom"
import { useGetProductById } from "@/services"
import { Description, Actions, MobileImage } from "./components"
import { Spinner } from "@/components"
import styles from "./styles.module.scss"

const Detail = () => {
    const {productId} = useParams()
    const {data, isLoading} = useGetProductById(productId)

    return (
        <div className={styles.productDetail}>
          <div className={styles.productDetailLeft}>
          {isLoading? <Spinner /> : <MobileImage imgUrl={data.imgUrl} model={data.model} />}
          </div>
            <div className={styles.productDetailRight}>
            {isLoading ? <Spinner /> :
            <>
                <Description data={data} /> 
                <Actions options={data.options} productId={productId} />
            </>}
            </div>
        </div>
    )
}

export default Detail