import React from "react"
import ContentLoader from "react-content-loader"

export const MySkeletonLoader = (props) => (
	<ContentLoader
		speed={2}
		width={254}
		height={357}
		viewBox="0 0 254 357"
		backgroundColor="#cfc9c9"
		foregroundColor="#000000"
		{...props}
	>
		<rect x="43" y="149" rx="3" ry="3" width="171" height="17" />
		<rect x="41" y="195" rx="3" ry="3" width="174" height="17" />
		<circle cx="130" cy="97" r="35" />
		<rect x="42" y="223" rx="0" ry="0" width="174" height="18" />
		<rect x="209" y="208" rx="0" ry="0" width="1" height="0" />
		<rect x="41" y="252" rx="0" ry="0" width="176" height="18" />
	</ContentLoader>
)
