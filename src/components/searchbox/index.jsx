import { useState } from "react";
import { accessibleOnClick } from "@/utils";
import { PropTypes } from "prop-types";
import styles from "./styles.module.scss";

export const SearchBox = ({ onChange }) => {
	const [searchValue, setSearchValue] = useState("");
	const onChangeSearchInput = (e) => {
		setSearchValue(e.target.value);
		onChange(e.target.value);
	};

	return (
		<div className={styles.searchBlock}>
			<img src="img/search.svg" alt="search" />
			<input
				value={searchValue}
				onChange={onChangeSearchInput}
				placeholder="Search..."
			/>
			{searchValue ? (
				<img
					src="img/delete.svg"
					{...accessibleOnClick(() => {
						setSearchValue("")
						onChange("")
					})}
					alt="delete"
				/>
			) : null}
		</div>
	);
};

SearchBox.propTypes = {
	onChange: PropTypes.func.isRequired
};
