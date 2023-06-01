import { Card, CardBody } from "@chakra-ui/card";
import { Stack, Text, Box, StackDivider, Flex } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import ExhibitCardLinks from "./ExhibitCardLinks";

function VisitCard() {
	return (
		<Card width="90%">
			<CardBody textStyle="playfairBold">
				<Stack divider={<StackDivider />} spacing="4">
					<ExhibitCardLinks
						// destination=""
						justification="flex-start"
						text="Buy Tickets"
					/>
					<ExhibitCardLinks
						// destination=""
						justification="flex-end"
						text="Become a Member"
					/>
					<ExhibitCardLinks
						// destination=""
						justification="flex-start"
						text="Join Email List"
					/>
				</Stack>
			</CardBody>
		</Card>
	);
}

export default VisitCard;
