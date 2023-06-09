import { Box, Heading, Card, CardBody } from "@chakra-ui/react";
import { Stack, StackDivider } from "@chakra-ui/layout";
import VisitTextItem from "./VisitTextItem";

// Component that renders sections for Visit section
function VisitComponent({ headingText, contentArray }) {
	return (
		<Box position="relative" display="inline-block" whiteSpace="nowrap" h="100%">
			<Card
				h="100%"
				variant="outline"
				borderColor="gray.300"
				boxShadow="dark-lg"
				my={{ base: "3", md: "0" }}
			>
				<CardBody textStyle="playfairBold" h="100%">
					<Stack divider={<StackDivider borderColor="gray.300" />} spacing="4">
						<Heading variant="exhibit-heading" textAlign="left" fontSize="1.25em">
							{headingText}
						</Heading>
						<Box position="relative" borderRadius="sm">
							<Box borderRadius="sm" textStyle="robotoSlab" fontWeight="normal">
								{contentArray.map((contentLine, index) => {
									// use of Visit Text Item component
									return <VisitTextItem key={index} contentText={contentLine} />;
								})}
							</Box>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</Box>
	);
}

export default VisitComponent;
