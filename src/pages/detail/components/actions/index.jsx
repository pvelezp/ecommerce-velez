
import { useState } from "react"
import { useSaveToCart } from "@/services"
import { Selector } from "@/components"
import { useCartContext } from "@/context"
import styles from "./styles.module.scss"

export const Actions = ({options, productId}) => {

    const [color, setColor] = useState("")
    const [storage, setStorage] = useState("")
    const { mutateAsync:saveToCart, isLoading:isCartLoading} = useSaveToCart()
    const {addToCart} = useCartContext()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await saveToCart({
            id:productId,
            colorCode:color,
            storageCode:storage
        })
        if(res){
            addToCart(res.count);
        }
    }

    return (
        <div className={styles.actions}>
            <h3>Actions</h3>
            <form onSubmit={handleSubmit}>
            <Selector
            handleSelect={setColor}
        options={options.colors}
        label="Colors"
             />
            <Selector
            handleSelect={setStorage}
        label="Storages"
        options={options.storages}
             />
             <button disabled={!color || !storage} type="submit" >
            {isCartLoading ? "..." : "Add to cart"}
            </button>
            </form>
        </div>
    )
}
