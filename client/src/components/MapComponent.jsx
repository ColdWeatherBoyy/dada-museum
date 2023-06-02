import { Box, Image, Text, Heading, Link } from "@chakra-ui/react";
import { useState } from "react";
import VisitTextItem from "./VisitTextItem";

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
				<Box width="100%" height="100%" borderRadius="sm" textStyle="battambang">
					{contentArray.map((contentLine, index) => {
						return (
							<Link key={index} destination="">
								<VisitTextItem key={index} contentText={contentLine} />
							</Link>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
}

export default MapComponent;
