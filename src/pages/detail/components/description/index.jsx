import styles from "./styles.module.scss"

export const Description = ({data}) => {
    return (
    <div className={styles.description}>
        <h4>Description:</h4>
        <p>{data.brand}</p>
        <p>{data.model}</p>
        <p>{data.price}</p>
        <p>{data.cpu}</p>
        <p>{data.os}</p>
        <p>{data.displayResolution}</p>
        <p>{data.battery}</p>
        <p>{data.primaryCamera.length===1 ? data.primaryCamera: data.primaryCamera.join(", ")}</p>
        <p>{data.dimentions}</p>
        <p>{data.battery}</p>
        <p>{data.weight}</p>
    </div>
    )
}
