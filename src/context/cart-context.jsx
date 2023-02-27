import { createContext, useContext, useState } from "react";

export const AppContext = createContext({});

export const CartProvider = ({ children }) => {
	const [cartCount, setCartCount] = useState(0);
	const [currentDetailId, setCurrentDetailId] = useState("")

	const addToCart = (count) => {
		setCartCount(prevCount => prevCount +count)
	};

	return (
		<AppContext.Provider
			value={{
				cartCount,
				currentDetailId,
				setCurrentDetailId,
				addToCart,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useCartContext = () => useContext(AppContext);
