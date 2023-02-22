import { Card } from "@/components";
import { CardSkeleton } from "@/components/card-skeleton";
import { useMemo } from "react";
import { useGetProducts } from "@/services";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";

export const ProductsList = ({ searchValue }) => {
	const {data:items, isLoading}= useGetProducts()
	const navigate = useNavigate()

	const filteredItems = useMemo(() => {
		if(searchValue.length === 0) return items
		return items.filter((item) =>
			item.model.toLowerCase().includes(searchValue.toLowerCase())
		)
	}, [items, searchValue]);

	const renderItems = () => {
		if (filteredItems === undefined) return null;
		if (isLoading)
			return [...Array(4).keys()].map((item) => <CardSkeleton key={item} />);

		return filteredItems.map((item) => <Card
		 key={item.id}
		 item={item}
		 onHandleClick={()=>navigate(`/detail/${item.id}`)} />);
	};

	return <div className={styles.list}>{renderItems()}</div>;
};
