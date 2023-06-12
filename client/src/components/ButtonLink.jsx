import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// Version of brand button that is designed for Link functionality
function ButtonLink({ buttonText, link }) {
	return (
		<Box width="100%">
			<Link to={link}>
				<Button
					my={3}
					borderRadius="50px"
					width="100%"
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
					_active={{
						color: "#B1BAC1",
						bg: "#53443D",
						boxShadow: "inset -1px -1px 4px 3px rgba(0, 0, 0, .4)",
						transform: "scale(1) translate(0px, 0px)",
					}}
					py={{ base: 4, lg: 6 }}
					fontSize={{
						sm: "16px",
						md: "18px",
						lg: "20px",
					}}
				>
					{buttonText}
				</Button>
			</Link>
		</Box>
	);
}

export default ButtonLink;
