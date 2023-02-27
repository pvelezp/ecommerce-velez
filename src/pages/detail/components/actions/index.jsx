import { useState } from "react"
import { useSaveToCart } from "@/services"
import { Selector, Button, Spinner } from "@/components"
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
            <form onSubmit={handleSubmit}>
                <div className={styles.actionsSelectors}>
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
                </div>
                <Button fullWidth disabled={!(color && storage)} type="submit">
                {isCartLoading ? <Spinner />: "Add to cart"}
                </Button>
            </form>
        </div>
    )
}
