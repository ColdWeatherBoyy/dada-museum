import { Text } from "@chakra-ui/react";
import { useState } from "react";

function VisitTextItem({ contentText }) {
	const [isActive, setIsActive] = useState(false);

	return (
		<Text
			color="black"
			textAlign="left"
			pr={{ sm: "10%", md: "10%", lg: "10%" }}
			fontSize={{ sm: "17px", md: "15px", lgm: "18px" }}
			w="100%"
		>
			{contentText}
		</Text>
	);
}

export default VisitTextItem;
