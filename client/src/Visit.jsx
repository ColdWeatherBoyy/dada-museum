import { Box, SimpleGrid, Flex, Heading } from "@chakra-ui/react"
import VisitComponent from "./VisitComponent.jsx"
import Button from "./Button.jsx"

function Visit() {
    return (
        <Box paddingY={16} w="100%" minH="90vh">
			<SimpleGrid
				columns={{ sm: 1, md: 2 }}
				spacingX={{ sm: 0, md: 8, lg: 16 }}
				spacingY={20}
				mx={{ sm: 8, md: 8, lg: 16 }}
				justifyContent="center"
			>
                <Flex direction="column" align="start" justify="space-around" height="100%">
					<Box width="100%" alignSelf="flex-start">
                        <Heading textAlign="center" variant="section-heading" fontSize="3.15em">
                            Visit Us
                        </Heading>
                        <Box width="100%" borderBottom="5px solid #D17B7B" marginBottom="10%" />
                    </Box>
                    <VisitComponent
                        headingText="Hours:"
                        contentText="Mon: Closed<br/>Tues-Thurs: 10am-5pm<br/>Fri-Sat: 10am-7pm<br/>Sun: 12pm"
                    />
                    <Button buttonText="Buy Tickets" />
                    <Button buttonText="Become a Member" />
                </Flex>
                <Flex direction="column" align="start" justify="space-around" height="100%">
                    <VisitComponent
                        headingText="Museum Status:"
                        contentText="Open"
                    />
                </Flex>
            </SimpleGrid>
        </Box>
    );
}

export default Visit;