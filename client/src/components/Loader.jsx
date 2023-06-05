import { CircularProgress, Flex, Box } from "@chakra-ui/react";

function Loader({ number }) {
	return (
		<Box position="relative" width="100px" height="100px" mb={number}>
			<CircularProgress
				capIsRound
				isIndeterminate
				value={75}
				color="#53443D"
				thickness="5px"
				trackColor="gray.100"
				position="absolute"
				transform="scale(2)"
				bottom={0}
			/>
			<CircularProgress
				capIsRound
				isIndeterminate
				value={75}
				color="#B1BAC1"
				thickness="6.75px"
				trackColor="gray.100"
				position="absolute"
				transform="scale(1.5) scaleX(-1) rotate(-60deg)"
				bottom={0}
			/>
			<CircularProgress
				capIsRound
				isIndeterminate
				value={75}
				thickness="9.5px"
				color="#53443D"
				trackColor="gray.100"
				position="absolute"
				bottom={0}
				transform="scale(1)"
			/>
			<CircularProgress
				capIsRound
				isIndeterminate
				value={75}
				thickness="17px"
				color="#B1BAC1"
				trackColor="gray.100"
				position="absolute"
				bottom={0}
				transform="scale(.5) scaleX(-1) rotate(-60deg)"
			/>
		</Box>
	);
}

export default Loader;
