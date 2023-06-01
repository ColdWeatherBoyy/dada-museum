import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";
import VisitTextItem from "./VisitTextItem";

function VisitComponent({ headingText, contentArray }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Box
			position="relative"
			display="inline-block"
			marginBottom={{ sm: "5%", md: "10%", lg: "15%" }}
			w="100%"
		>
			<Heading
				variant="exhibit-heading"
				textAlign="left"
				fontSize="1.25em"
				pb={0}
				mb="1em"
			>
				{headingText}
			</Heading>
			<Box
				position="relative"
				borderRadius="sm"
				onMouseEnter={() => setIsActive(true)}
				onMouseLeave={() => setIsActive(false)}
				onTouchStart={() => (isActive ? setIsActive(false) : setIsActive(true))}
			>
				<Box width="100%" height="100%" borderRadius="sm" textStyle="battambang">
					{contentArray.map((contentLine, index) => {
						return <VisitTextItem key={index} contentText={contentLine} />;
					})}
				</Box>
			</Box>
		</Box>
	);
}

export default VisitComponent;
