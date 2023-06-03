// // import { CircularProgress, Box } from "@chakra-ui/react";

// // const Loader = () => {
// // 	return (
// // 		<Box display="flex" justifyContent="center">
// // 			<CircularProgress isIndeterminate color="green.300" position="relative">
// // 				<CircularProgress isIndeterminate color="purple" height="2px" />
// // 			</CircularProgress>
// // 		</Box>
// // 	);
// // };

// // export default Loader;

// import { CircularProgress, Box } from "@chakra-ui/react";

// const Loader = () => {
// 	return (
// 		<Box display="flex" alignItems="center" justifyContent="center">
// 			<Box position="relative">
// 				<CircularProgress
// 					value={75}
// 					size="120px"
// 					thickness="8px"
// 					color="blue.500"
// 					emptyColor="gray.200"
// 					trackColor="transparent"
// 					capIsRound
// 					sx={{
// 						position: "absolute",
// 						zIndex: 2,
// 						animation: "rotate 2s infinite linear",
// 						"@keyframes rotate": {
// 							"0%": {
// 								transform: "rotate(180deg)",
// 							},
// 							"100%": {
// 								transform: "rotate(-180deg)",
// 							},
// 						},
// 					}}
// 				/>
// 				<CircularProgress
// 					value={50}
// 					size="60px"
// 					thickness="8px"
// 					color="green.500"
// 					emptyColor="transparent"
// 					trackColor="transparent"
// 					capIsRound
// 					sx={{
// 						position: "absolute",
// 						zIndex: 1,
// 						animation: "rotate 2s infinite linear",
// 						"@keyframes rotate": {
// 							"0%": {
// 								transform: "rotate(0deg)",
// 							},
// 							"100%": {
// 								transform: "rotate(360deg)",
// 							},
// 						},
// 					}}
// 				/>
// 			</Box>
// 		</Box>
// 	);
// };

// export default Loader;
