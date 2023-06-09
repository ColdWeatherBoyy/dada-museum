import { Box, Heading } from "@chakra-ui/react";
import VisitTextItem from "./VisitTextItem";
import { Link } from "react-router-dom";

// Component that renders sections for sitemap/footer
function MapComponent({ headingText, contentArray, links }) {
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
			<Box position="relative" borderRadius="sm">
				<Box
					color="gray.100"
					width="100%"
					height="100%"
					borderRadius="sm"
					textStyle="robotoSlab"
				>
					{/* mapping through array to place appropriate number of links */}
					{contentArray.map((contentLine, index) => {
						return (
							<Link key={index} to={links[index]}>
								<Box _hover={{ textDecorationLine: "underline" }}>
									{/* Repurpose of previous component */}
									<VisitTextItem key={index} contentText={contentLine} />
								</Box>
							</Link>
						);
					})}
				</Box>
			</Box>
		</Box>
	);
}

export default MapComponent;
