import { Button } from "@chakra-ui/react";

function BrandButton({ buttonText, functionCall }) {
	return (
		<Button
			borderRadius="50px"
			width="fit-content"
			textStyle="robotoSlab"
			border="1px solid #B1BAC1"
			bg="gray.100"
			color="#53443D"
			_hover={{
				bg: "#53443D",
				color: "gray.100",
				boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
				transform: "scale(1.05) translate(-2px, -2px)",
				zIndex: "1",
			}}
			_active={{
				color: "#B1BAC1",
				boxShadow: "inset 2px 2px 2px 2px rgba(0, 0, 0, 0.2)",
				transform: "scale(1) translate(0px, 0px)",
			}}
			py={2}
			fontSize={{
				sm: "12px",
				md: "16px",
				lg: "18px",
			}}
			onClick={() => {
				{
					functionCall();
				}
			}}
		>
			{buttonText}
		</Button>
	);
}

export default BrandButton;
