import { Button } from "@chakra-ui/react";

// Basic button design/interactivity to use on site for all buttons
function BrandButton({ buttonText, functionCall }) {
	return (
		<Button
			borderRadius="50px"
			width="fit-content"
			textStyle="robotoSlab"
			border="1px solid #B1BAC1"
			bg="gray.100"
			color="#53443D"
			boxShadow="lg"
			// hover effect for desktop
			_hover={{
				bg: "#53443D",
				color: "gray.100",
				boxShadow: "dark-lg",
				transform: "scale(1.05) translate(-2px, -2px)",
				zIndex: "1",
			}}
			// click effect for desktop/mobile
			_active={{
				color: "#B1BAC1",
				bg: "#53443D",
				boxShadow: "inset -1px -1px 4px 3px rgba(0, 0, 0, .4)",
				transform: "scale(1) translate(0px, 0px)",
				transition: "all 0.3s ease",
			}}
			py={{ base: 2, md: 4 }}
			px={{ base: 2, md: 4 }}
			fontSize={{
				sm: "14px",
				md: "18px",
				lg: "20px",
			}}
			// onClick function passed in as prop
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
