import { Text } from "@chakra-ui/react";
import { useState } from "react";

function VisitTextItem({ contentText }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Text
			color="black"
			textAlign={{ base: "center", md: "left" }}
			pr={{ sm: "0%", md: "10%", lg: "10%" }}
			fontSize={{ sm: "17px", md: "15px", lgm: "18px" }}
			w="100%"
			lineHeight="1.5em"
		>
			{contentText}
		</Text>
	);
}

export default VisitTextItem;
