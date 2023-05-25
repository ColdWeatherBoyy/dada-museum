import { Card, CardBody } from "@chakra-ui/card";
import { Stack, Text, Box, StackDivider, Flex } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { useState } from "react";

function ExhibitCardLinks({ justification, text }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Link
			onMouseEnter={() => setIsActive(true)}
			onMouseLeave={() => setIsActive(false)}
			onTouchStart={() => setIsActive((prevState) => !prevState)}
			onTouchEnd={() => setIsActive((prevState) => !prevState)}
		>
			<Flex justify={justification}>
				<Text
					pt="2"
					px={2}
					fontSize="1.65em"
					textDecoration={isActive ? "underline" : "none"}
					letterSpacing={isActive ? ".5px" : "normal"}
					transition="all .3s ease"
				>
					{text}
				</Text>
			</Flex>
		</Link>
	);
}

export default ExhibitCardLinks;
