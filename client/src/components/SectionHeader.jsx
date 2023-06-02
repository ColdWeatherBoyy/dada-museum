import { Box, Heading, Flex } from "@chakra-ui/react";

function SectionHeader({ headerText }) {
	return (
		<Flex direction="column" width="100%" mb={6}>
			<Heading variant="section-heading" fontSize="2.25em">
				{headerText}
			</Heading>
			{/* border controlled seperately from text length */}
			<Box width="100%" borderBottom="5px solid #D17B7B" marginBottom={4} />
		</Flex>
	);
}

export default SectionHeader;
