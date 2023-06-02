import { Card, CardBody } from "@chakra-ui/card";
import ExhibitCardLinks from "./ExhibitCardLinks";

function Button({ buttonText }) {
	return (
		<Card width="90%" marginBottom={{ sm: "5%", md: "10%", lg: "15%" }}>
			<CardBody textStyle="playfairBold">
				<ExhibitCardLinks
					// destination=""
					justification="center"
					text={buttonText}
				/>
			</CardBody>
		</Card>
	);
}

export default Button;
