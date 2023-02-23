import styles from "./styles.module.scss";

export const Card = ({ item, onHandleClick }) => {
	const {price, imgUrl, model, brand} = item
	return (
		<article
		onClick={onHandleClick}
		 className={styles.card}>
			<img 
			loading="lazy"
			role="presentation"
			decoding="async"
			fetchpriority="high"
			 src={imgUrl} alt={model} />
			<h5>{model}</h5>
			<h6>{brand}</h6>
			<div>
				<span>Price:</span>
				<b>$ {price}</b>
			</div>
		</article>
	);
};