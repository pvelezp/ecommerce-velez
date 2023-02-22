import { SearchBox } from "@/components/searchbox";
import { useState } from "react";
import { ProductsList } from "./components/products-list";
import styles from "./styles.module.scss"

const Home = () => {
	const [searchValue, setSearchValue] = useState("");

    return (
		<div className={styles.home}>
			<div className={styles.homeTop}>
				<h1>
					{searchValue ? `Search by request: ${searchValue}` : "All products"}
				</h1>
				<SearchBox onChange={(val) => setSearchValue(val)} />
			</div>
			<ProductsList searchValue={searchValue} />
		</div>
    )
}

export default Home