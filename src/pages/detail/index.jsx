import { useParams } from "react-router-dom"
import { useGetProductById } from "@/services"

const Detail = () => {
    
    const {productId} = useParams()
    const {data} = useGetProductById(productId)
    return (
        <div>
            Detail
        </div>
    )
}

export default Detail