import { useMemo } from "react";
import { Card, CardSkeleton } from "@/components";
import { useGetProducts } from "@/services";
import { useNavigate } from "react-router-dom";
import { includesField } from "@/utils";
import { useCartContext } from "@/context";
import styles from "./styles.module.scss";

export const ProductsList = ({ searchValue }) => {
	const {data:items, isLoading}= useGetProducts()
	const { setCurrentDetailId } = useCartContext()
	const navigate = useNavigate()

	const filteredItems = useMemo(() => {
		return searchValue ? items.filter((item) =>
		includesField(item.model, searchValue)||includesField(item.brand, searchValue)) : items
	}, [items, searchValue]);

	const renderItems = () => {
		if (isLoading) return [...Array(8).keys()].map((item) => <CardSkeleton key={item} />);

		return filteredItems.map((item) => <Card
		 key={item.id}
		 item={item}
		 onHandleClick={()=>{
			 navigate(`/detail/${item.id}`)
			 setCurrentDetailId(item.id)
			 }} 
		 />);
	};

	return <div className={styles.list}>{renderItems()}</div>;
};
