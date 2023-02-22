import styles from "./styles.module.scss";

export const Card = ({ item, onHandleClick }) => {
	const {price, imgUrl, model, brand} = item
	return (
		<article
		onClick={onHandleClick}
		 className={styles.card}>
			<img src={imgUrl} width={133} height={112} alt={model} />
			<h5>{model}</h5>
			<h6>{brand}</h6>
			<div>
				<span>Price:</span>
				<b>$ {price}.</b>
			</div>
		</article>
	);
};