import { Box, SimpleGrid, Flex, Heading } from "@chakra-ui/react";
import VisitComponent from "../components/VisitComponent.jsx";
import VisitCard from "../components/VisitCard.jsx";

function Visit() {
	return (
		<Box w="100%" bgColor="gray.100">
			<SimpleGrid
				columns={{ sm: 1, md: 2 }}
				spacingX={{ sm: 0, md: 8, lg: 16 }}
				spacingY={20}
				mx={{ sm: 8, md: 8, lg: 16 }}
				justifyContent="center"
			>
				<Flex direction="column" align="start" justify="space-around" height="100%">
					<Box width="100%" alignSelf="flex-start">
						<Heading variant="section-heading" fontSize="2.25em">
							Visit Us
						</Heading>
						<Box width="100%" borderBottom="5px solid #D17B7B" marginBottom="10%" />
					</Box>
					<VisitComponent
						headingText="Hours:"
						contentArray={[
							"Mon: Closed",
							"Tues-Thurs: 10am-5pm",
							"Fri-Sat: 10am-7pm",
							"Sun: 12pm",
						]}
					/>
					<VisitComponent headingText="Museum Status:" contentArray={["Open"]} />
				</Flex>
				<Flex direction="column" align="start" justify="space-around" height="100%">
					<VisitCard />
				</Flex>
			</SimpleGrid>
		</Box>
	);
}

export default Visit;
