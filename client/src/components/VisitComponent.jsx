import { Box, Heading, Card, CardBody } from "@chakra-ui/react";
import { Stack, StackDivider } from "@chakra-ui/layout";
import { useState } from "react";
import VisitTextItem from "./VisitTextItem";

function VisitComponent({ headingText, contentArray }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Box position="relative" display="inline-block" whiteSpace="nowrap">
			<Card
				width="fit-content"
				height="100%"
				variant="outline"
				borderColor="gray.300"
				boxShadow="4px 4px 4px 4px rgba(0, 0, 0, 0.2)"
				my={{base: "3", md: "0"}}
			>
				<CardBody textStyle="playfairBold">
					<Stack divider={<StackDivider borderColor="gray.300" />} spacing="4">
						<Heading
							variant="exhibit-heading"
							textAlign="left"
							fontSize="1.25em"
							// pb={0}
							// mb="1em"
						>
							{headingText}
						</Heading>
						<Box
							position="relative"
							borderRadius="sm"
							onMouseEnter={() => setIsActive(true)}
							onMouseLeave={() => setIsActive(false)}
							onTouchStart={() => (isActive ? setIsActive(false) : setIsActive(true))}
						>
							<Box borderRadius="sm" textStyle="battambang" fontWeight="normal">
								{contentArray.map((contentLine, index) => {
									return <VisitTextItem key={index} contentText={contentLine} />;
								})}
							</Box>
						</Box>
					</Stack>
				</CardBody>
			</Card>
		</Box>
	);
}

export default VisitComponent;
