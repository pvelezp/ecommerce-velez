import { accessibleOnClick } from "@/utils";
import styles from "./styles.module.scss";

export const Card = ({ item, onHandleClick }) => {
	const {price, imgUrl, model, brand} = item
	return (
		<article
		data-testid="card"
		{...accessibleOnClick(onHandleClick)}
		 className={styles.card}>
			<div className={styles.cardImage}>
			<img 
			loading="lazy"
			role="presentation"
			fetchpriority="high"
			width="151"
			height="202"
			 src={imgUrl} alt={model} />
			</div>

			<div className={styles.cardInfo}>
			<h3>{model}</h3>
			<h5>{brand}</h5>
			</div>
			<div className={styles.cardPrice}>
				<h2>{!price ? "N/A":`$${price}`}</h2>
			</div>
		</article>
	);
};