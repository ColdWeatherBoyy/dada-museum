// David, if I'm right that this is not being used, please delete

// import { Text, Flex } from "@chakra-ui/layout";
// import { Link } from "@chakra-ui/react";
// import { useState } from "react";

// function CardLinks({ destination, justification, text }) {
// 	const [isActive, setIsActive] = useState(false);

// 	return (
// 		<Link
// 			href={destination}
// 			onMouseEnter={() => setIsActive(true)}
// 			onMouseLeave={() => setIsActive(false)}
// 			onTouchStart={() => setIsActive((prevState) => !prevState)}
// 			onTouchEnd={() => setIsActive((prevState) => !prevState)}
// 		>
// 			<Flex justify={justification}>
// 				<Text
// 					pt="2"
// 					px={2}
// 					fontSize="1.25em"
// 					textDecoration={isActive ? "underline" : "none"}
// 					letterSpacing={isActive ? ".5px" : "normal"}
// 					transition="all .3s ease"
// 				>
// 					{text}
// 				</Text>
// 			</Flex>
// 		</Link>
// 	);
// }

// export default CardLinks;
