import { Card, CardBody } from "@chakra-ui/card";
import { Stack, StackDivider, Flex } from "@chakra-ui/layout";
import ExhibitCardLinks from "./ExhibitCardLinks";

function ExhibitCard() {
	return (
		<Card width="90%">
			<CardBody textStyle="playfairBold">
				<Stack divider={<StackDivider />} spacing="4">
					<ExhibitCardLinks
						// destination=""
						justification="flex-start"
						text="Permanent Exhibits"
					/>
					<ExhibitCardLinks
						// destination=""
						justification="flex-end"
						text="Upcoming Exhibits"
					/>
					<ExhibitCardLinks
						// destination=""
						justification="flex-start"
						text="Previous Exhibits"
					/>
				</Stack>
			</CardBody>
		</Card>
	);
}

export default ExhibitCard;
