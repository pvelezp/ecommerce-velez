import { PropTypes } from "prop-types";

export const MobileImage = ({imgUrl, model}) => {
    return <img src={imgUrl} alt={model} />
}

MobileImage.propTypes = {
	model: PropTypes.string.isRequired,
	imgUrl: PropTypes.string.isRequired,
};