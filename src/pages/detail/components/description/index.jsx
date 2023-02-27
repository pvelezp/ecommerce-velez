import styles from "./styles.module.scss";

export const Description = ({data}) => {

    const infoDescription = [
        { title:"Brand", text:data.brand},
        { title:"Model", text:data.model},
        { title:"Price", text:data.price || "N/A"},
        { title:"CPU", text:data.cpu},
        { title:"Operation system", text:data.os},
        { title:"Display resolution", text:data.displayResolution},
        { title:"Battery", text:data.battery|| "N/A"},
        { title:"Cameras", text:(data.primaryCamera.length===1 || !Array.isArray(data.primaryCamera)) ? data.primaryCamera: data.primaryCamera.join(", ")},
        { title:"Dimentions", text:data.dimentions},
        { title:"Weight", text:data.weight|| "N/A"}
    ]

    return (
    <section className={styles.description}>
        <h2>Description:</h2>
        {
            infoDescription.map(({title,text}) =>(
                <article key={title}>
                    <b>{title}:</b> {text}
                </article>
            ))
        }
    </section>
    )
}
