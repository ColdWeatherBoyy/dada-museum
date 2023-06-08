import { CircularProgress, Flex } from "@chakra-ui/react";

function Loader({ marginBottom }) {
	return (
		<Flex justify="center" align="center" width="100px" height="100px" mb={marginBottom}>
			<CircularProgress
				capIsRound
				isIndeterminate
				value={75}
				color="#53443D"
				thickness="5px"
				trackColor="gray.100"
				position="absolute"
				transform="scale(2)"
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
			/>
			<CircularProgress
				capIsRound
				isIndeterminate
				value={75}
				thickness="9.5px"
				color="#53443D"
				trackColor="gray.100"
				position="absolute"
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
				transform="scale(.5) scaleX(-1) rotate(-60deg)"
			/>
		</Flex>
	);
}

export default Loader;
