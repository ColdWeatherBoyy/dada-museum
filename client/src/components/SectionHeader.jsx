import { Box, Heading, Flex } from "@chakra-ui/react";

function SectionHeader({ headerText }) {
	return (
		<Flex direction="column" mb={6}>
			<Heading variant="section-heading" fontSize="2.25em">
				{headerText}
			</Heading>
			<Box borderBottom="5px solid #D17B7B" marginBottom={4} />
		</Flex>
	);
}

export default SectionHeader;
