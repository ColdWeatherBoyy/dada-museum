import { Card, CardBody } from "@chakra-ui/card";
import { Stack, StackDivider } from "@chakra-ui/layout";
import ExhibitCardLinks from "./ExhibitCardLinks";

function ExhibitCard() {
	return (
		<Card
			width="50%"
			height="fit-content"
			variant="outline"
			borderColor="gray.300"
			boxShadow="3px 3px 3px 3px rgba(0, 0, 0, 0.2)"
		>
			<CardBody textStyle="playfairBold">
				<Stack divider={<StackDivider borderColor="gray.300" />} spacing="4">
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
