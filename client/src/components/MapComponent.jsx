import { Box, Image, Text, Heading } from "@chakra-ui/react";
import { useState } from "react";
import VisitTextItem from "./VisitTextItem";
import { Link } from "react-router-dom";

function MapComponent({ headingText, contentArray }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Box position="relative" display="inline-block" marginBottom="5%" w="100%">
			<Heading
				variant="exhibit-heading"
				textAlign={{ base: "center", md: "start" }}
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
				<Box
					color="gray.100"
					width="100%"
					height="100%"
					borderRadius="sm"
					textStyle="robotoSlab"
				>
					{contentArray.map((contentLine, index) => {
						return (
							<Box key={index} as="a" href="/link" >
								<VisitTextItem key={index} contentText={contentLine} />
							</Box>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
}

export default MapComponent;
