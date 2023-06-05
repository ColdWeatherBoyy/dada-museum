import { Box, SimpleGrid, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import VisitComponent from "../components/VisitComponent.jsx";
import ButtonArray from "../components/ButtonArray";

function Visit() {
	const [status, setStatus] = useState("Open Test");

	const links = [
		{
			text: "Buy Tickets",
			link:  "www.google.com"
		},
		{
			text: "Become a Member",
			link:  "www.google.com"
		},
		{
			text: "Join Email List",
			link:  "www.google.com"
		},
	];

	const determineStatus = async () => {
		const current = new Date();
		console.log(current.getDay());
		console.log(current.getHours());
		switch (current.getDay()) {
			case 0:
				if (current.getHours() > 11 && current.getHours() < 16) {
					setStatus("Open");
				} else {
					setStatus("Closed");
				}
				break;
			case 1:
				setStatus("Closed");
				break;
			case 2:
				if (current.getHours() > 9 && current.getHours() < 17) {
					setStatus("Open");
				} else {
					setStatus("Closed");
				}
				break;
			case 3:
				if (current.getHours() > 9 && current.getHours() < 17) {
					setStatus("Open");
				} else {
					setStatus("Closed");
				}
				break;
			case 4:
				if (current.getHours() > 9 && current.getHours() < 17) {
					setStatus("Open");
				} else {
					setStatus("Closed");
				}
				break;
			case 5:
				if (current.getHours() > 9 && current.getHours() < 19) {
					setStatus("Open");
				} else {
					setStatus("Closed");
				}
				break;
			case 6:
				if (current.getHours() > 9 && current.getHours() < 19) {
					setStatus("Open");
				} else {
					setStatus("Closed");
				}
				break;
			default:
				setStatus("Open");
		}
	};

	useEffect(() => {
		determineStatus();
	}, []);

	return (
		<Box py={6} width="100%" bgColor="gray.100">
			<Box mx={{ sm: 8, md: 8, lg: 16 }}>
				<SectionHeader headerText="Visit Us" />
				<Flex direction="row" justify="space-between" wrap="no-wrap" mx="10%">
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
					<ButtonArray links={links}/>
				</Flex>
			</Box>
		</Box>
	);
}

export default Visit;
