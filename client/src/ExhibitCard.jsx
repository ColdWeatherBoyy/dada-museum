import { Card, CardBody } from "@chakra-ui/card";
import { Stack, Text, Box, StackDivider, Flex } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import ExhibitCardLinks from "./ExhibitCardLinks";

function ExhibitCard() {
	return (
		<Card width="90%">
			<CardBody textStyle="playfairBold">
				<Stack divider={<StackDivider />} spacing="4">
					<ExhibitCardLinks justification="flex-start" text="Permanent Exhibits" />
					<ExhibitCardLinks justification="flex-end" text="Upcoming Exhibits" />
					<ExhibitCardLinks justification="flex-start" text="Previous Exhibits" />
				</Stack>
			</CardBody>
		</Card>
	);
}

export default ExhibitCard;
