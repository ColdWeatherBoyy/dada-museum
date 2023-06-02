import { Card, CardBody } from "@chakra-ui/card";
import { Stack, StackDivider } from "@chakra-ui/layout";
import CardLinks from "./CardLinks";

function LinkCard({ textOne, textTwo, textThree }) {
	return (
		<Card
			width="50%"
			height="fit-content"
			variant="outline"
			borderColor="gray.300"
			boxShadow="4px 4px 4px 4px rgba(0, 0, 0, 0.2)"
		>
			<CardBody textStyle="playfairBold">
				<Stack divider={<StackDivider borderColor="gray.300" />} spacing="4">
					<CardLinks
						// destination=""
						justification="flex-start"
						text={textOne}
					/>
					<CardLinks
						// destination=""
						justification="flex-end"
						text={textTwo}
					/>
					<CardLinks
						// destination=""
						justification="flex-start"
						text={textThree}
					/>
				</Stack>
			</CardBody>
		</Card>
	);
}

export default LinkCard;
