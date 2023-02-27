import ContentLoader from "react-content-loader";

export const CardSkeleton = () => {
	return (
		<ContentLoader
			className="card"
			speed={2}
			width={275}
			height={348}
			viewBox="0 0 255 265"
			backgroundColor="#f3f3f3"
			foregroundColor="#ecebeb"
		>
			<rect x="1" y="0" rx="10" ry="10" width="275" height="185" />
			<rect x="0" y="167" rx="5" ry="5" width="255" height="15" />
			<rect x="0" y="195" rx="5" ry="5" width="100" height="15" />
			<rect x="1" y="212" rx="5" ry="5" width="80" height="20" />
			<rect x="224" y="230" rx="10" ry="10" width="32" height="32" />
		</ContentLoader>
	);
};
