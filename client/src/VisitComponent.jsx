import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";

function VisitComponent({ headingText, contentText }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Box
			position="relative"
			display="inline-block"
			marginBottom={{ sm: "5%", md: "10%", lg: "15%" }}
		>
			<Heading variant="exhibit-heading" textAlign="left" fontSize="2em" pb={0}>
				{headingText}
			</Heading>
			<Box
				position="relative"
				borderRadius="sm"
				onMouseEnter={() => setIsActive(true)}
				onMouseLeave={() => setIsActive(false)}
				onTouchStart={() => (isActive ? setIsActive(false) : setIsActive(true))}
			>
				<Box
					width="100%"
					height="100%"
					borderRadius="sm"
					textStyle="battambang"
				>
					<Text
						color="black"
						textAlign="left"
						pr={{ sm: "10%", md: "10%", lg: "10%" }}
						fontSize={{ sm: "17px", md: "15px", lgm: "18px" }}
					>
						{contentText}
					</Text>
				</Box>
			</Box>
		</Box>
	);
}

export default VisitComponent;
