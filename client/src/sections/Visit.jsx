// Necessary imports from Chakra, React, and Other components
import { Box, Flex, Card, CardBody, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SectionHeader from "../components/SectionHeader";
import VisitComponent from "../components/VisitComponent.jsx";
import ButtonArray from "../components/ButtonArray";

function Visit() {
	// Sets up state for if Museum is open or closed
	const [status, setStatus] = useState("Open Test");

	// Constants for button array
	const links = [
		{
			text: "Buy Tickets",
			link: "/link",
		},
		{
			text: "Become a Member",
			link: "/link",
		},
		{
			text: "Join Email List",
			link: "/link",
		},
	];

	// Function to determine if Museum is open or not
	const determineStatus = async () => {
		// grabs date
		const current = new Date();
		// Switch case to check the time and day of the week against potential open or closed hours
		switch (current.getDay()) {
			case 0:
				if (current.getHours() > 11 && current.getHours() < 16) {
					setStatus("OPEN");
				} else {
					setStatus("CLOSED");
				}
				break;
			case 1:
				setStatus("CLOSED");
				break;
			case 2:
				if (current.getHours() > 9 && current.getHours() < 17) {
					setStatus("OPEN");
				} else {
					setStatus("CLOSED");
				}
				break;
			case 3:
				if (current.getHours() > 9 && current.getHours() < 17) {
					setStatus("OPEN");
				} else {
					setStatus("CLOSED");
				}
				break;
			case 4:
				if (current.getHours() > 9 && current.getHours() < 17) {
					setStatus("OPEN");
				} else {
					setStatus("CLOSED");
				}
				break;
			case 5:
				if (current.getHours() > 9 && current.getHours() < 19) {
					setStatus("OPEN");
				} else {
					setStatus("CLOSED");
				}
				break;
			case 6:
				if (current.getHours() > 9 && current.getHours() < 19) {
					setStatus("OPEN");
				} else {
					setStatus("CLOSED");
				}
				break;
			default:
				setStatus("OPEN");
		}
	};

	// useEffect to run determineStatus on page load
	useEffect(() => {
		determineStatus();
	}, []);

	return (
		<Box
			pt={6}
			pb={12}
			width="100%"
			bgColor="gray.100"
			boxShadow="inset 4px 4px 10px rgba(0, 0, 0, 0.2), inset -4px -4px 10px rgba(0, 0, 0, 0.2)"
		>
			<Box mx={{ sm: 8, md: 8, lg: 16 }}>
				<SectionHeader headerText="Visit Us" />
				<Flex
					direction={{ base: "column", md: "row" }}
					justify={{ base: "space-between", md: "space-around" }}
					align={{ base: "center", md: "center" }}
					wrap="no-wrap"
					mx="10%"
					h="100%"
				>
					{/* Use of Visit Component */}
					<VisitComponent
						headingText="Hours:"
						contentArray={[
							"Mon: Closed",
							"Tues-Thurs: 10am-5pm",
							"Fri-Sat: 10am-7pm",
							"Sun: 12pm-4pm",
						]}
					/>
					<Box
						display="flex"
						flexDirection="column"
						justifyContent="space-between"
						w="60%"
					>
						<Card
							w="100%"
							height="100%"
							variant="outline"
							borderColor="gray.300"
							boxShadow="dark-lg"
							alignSelf="center"
							mb={{ base: "3", md: "3" }}
							py={{ base: "3", md: "3" }}
						>
							<CardBody textStyle="playfairBold">
								<Heading variant="exhibit-heading" textAlign="center" fontSize="1.25em">
									{/* Using the state to conditionally render if the museum is open or closed */}
									{"The museum is currently " + status}
								</Heading>
							</CardBody>
						</Card>
						<ButtonArray links={links} padding={0} />
					</Box>
				</Flex>
			</Box>
		</Box>
	);
}

export default Visit;
