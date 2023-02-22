import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.id) === Number(id));
	};

	const onRemoveItem = (id) => {
		setCartItems((prev) =>
			prev.filter((item) => Number(item.id) !== Number(id)),
		);
	};

	const addToCart = (obj) => {
			const findItem = cartItems.find(
				(item) => Number(item.id) === Number(obj.id),
			);
			setCartItems((prev) =>
				findItem
					? prev.filter((el) => Number(el.id) !== Number(obj.id))
					: prev.concat(obj),
			);
	};

	return (
		<AppContext.Provider
			value={{
				cartItems,
				isItemAdded,
				setCartItems,
				addToCart,
				onRemoveItem,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useCartContext = () => useContext(AppContext);
