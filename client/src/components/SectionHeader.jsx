import { Box, Heading, Flex } from "@chakra-ui/react";

function SectionHeader({ headerText }) {
	return (
		<Flex direction="column" mb={6}>
			<Heading variant="section-heading" fontWeight="800">
				{headerText}
			</Heading>

			<Box borderBottom="2px solid #B1BAC1" borderRadius="md" />
		</Flex>
	);
}

export default SectionHeader;
