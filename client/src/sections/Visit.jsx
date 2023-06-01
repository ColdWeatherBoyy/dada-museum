import { Box, SimpleGrid, Flex, Heading } from "@chakra-ui/react";
import VisitComponent from "../components/VisitComponent.jsx";
import VisitCard from "../components/VisitCard.jsx";
import { useEffect, useState } from "react";

function Visit() {

	const [status, setStatus] = useState("Open Test");

	const determineStatus = async () => {
		const current = new Date();
		switch(current.getDay()) {
			case 0:
				if (current.getHours() > 11 && current.getHours() < 16) {
					setStatus("Open");
				}
				else {
					setStatus("Closed");
				}
				break;
			case 1:
				setStatus("Closed");
				break;
			case 2:
				if (current.getHours() > 9 && current.getHours() < 17) {
					setStatus("Open");
				}
				else {
					setStatus("Closed");
				}
				break;
			case 3:
				if (current.getHours() > 9 && current.getHours() < 17) {
					setStatus("Open");
				}
				else {
					setStatus("Closed");
				}
				break;
			case 4:
				if (current.getHours() > 9 && current.getHours() < 17) {
					setStatus("Open");
				}
				else {
					setStatus("Closed");
				}
				break;
			case 5:
				if (current.getHours() > 9 && current.getHours() < 19) {
					setStatus("Open");
				}
				else {
					setStatus("Closed");
				}
				break;
			case 6:
				if (current.getHours() > 9 && current.getHours() < 19) {
					setStatus("Open");
				}
				else {
					setStatus("Closed");
				}
				break;
			default:
				setStatus("Open");
		}
	}

	useEffect(() => {
		determineStatus();
	}, []);

	return (
		<Box paddingY={16} w="100%" minH="90vh">
			<SimpleGrid
				columns={{ sm: 1, md: 2 }}
				spacingX={{ sm: 0, md: 8, lg: 16 }}
				spacingY={20}
				mx={{ sm: 8, md: 8, lg: 16 }}
				justifyContent="center"
			>
				<Flex direction="column" align="start" justify="space-around" height="100%">
					<Box width="100%" alignSelf="flex-start">
						<Heading textAlign="center" variant="section-heading" fontSize="3.15em">
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
							"Sun: 12pm-4pm",
						]}
					/>
					<VisitComponent headingText="Museum Status:" contentArray={[status]} />
				</Flex>
				<Flex direction="column" align="start" justify="space-around" height="100%">
					<VisitCard />
				</Flex>
			</SimpleGrid>
		</Box>
	);
}

export default Visit;
