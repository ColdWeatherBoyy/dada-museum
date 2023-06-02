import {
	Box,
	Radio,
	RadioGroup,
	Stack,
	Button,
	Heading,
	SimpleGrid,
	Card,
} from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import CollageElement from "../components/CollageElement";
import CollagePreview from "../components/CollagePreview";

function Collage() {
	const collageBoundary = useRef();
	const [collageElements, setCollageElements] = useState([]);
	const [textValue, setTextValue] = useState("D");
	const [fontValue, setFontValue] = useState("serif");
	const [fontSize, setFontSize] = useState("small");

	const addShape = () => {
		console.log("submitted");
		const newShape = {
			text: textValue,
			font: fontValue,
			size: fontSize,
		};
		const newArray = [...collageElements, newShape];
		setCollageElements(newArray);
	};

	useEffect(() => {
		// console.log(collageElements);
	}, []);

	return (
		<Box paddingY={6} w="100%" bgColor="gray.100">
			<SimpleGrid
				columns={{ sm: 1, md: 2 }}
				spacingX={{ sm: 0, md: 8, lg: 16 }}
				spacingY={20}
				mx={{ sm: 8, md: 8, lg: 16 }}
				justifyContent="center"
			>
				<Box width="100%" alignSelf="flex-start">
					<Heading variant="section-heading" fontSize="2.25em">
						Make a Collage
					</Heading>
					<Box width="100%" borderBottom="5px solid #D17B7B" marginBottom="10%" />
				</Box>
			</SimpleGrid>
			<Box
				display="flex"
				flexDirection="row"
				justifyContent="space-between"
				mx={{ sm: 8, md: 8, lg: 16 }}
			>
				<Card bgColor="white" w="40%" maxH="60vh" p="0" ref={collageBoundary}>
					{collageElements.map((element, index) => {
						return (
							<CollageElement
								collageBoundary={collageBoundary}
								classText={element.font + " " + element.size}
								text={element.text}
								key={index}
							/>
						);
					})}
				</Card>
				<Card
					bgColor="white"
					w="55%"
					minH="60vh"
					display="flex"
					flexDirection="column"
					justifyContent="space-around"
					alignItems="center"
				>
					<Box
						display="flex"
						flexDirection="row"
						justifyContent="space-around"
						w="100%"
					>
						<Box
							display="flex"
							flexDirection="column"
							justifyContent="space-around"
						>
							<RadioGroup onChange={setTextValue} value={textValue}>
								<Stack direction="row">
									<Radio value="D">D</Radio>
									<Radio value="A">A</Radio>
									<Radio value="d">d</Radio>
									<Radio value="a">a</Radio>
								</Stack>
								<Stack direction="row">
									<Radio value="!">!</Radio>
									<Radio value="?">?</Radio>
								</Stack>
							</RadioGroup>
							<RadioGroup onChange={setFontValue} value={fontValue}>
								<Stack direction="column">
									<Radio value="serif">Serif</Radio>
									<Radio value="sans-serif">Sans-Serif</Radio>
								</Stack>
							</RadioGroup>
							<RadioGroup onChange={setFontSize} value={fontSize}>
								<Stack direction="column">
									<Radio value="small">Small</Radio>
									<Radio value="medium">Medium</Radio>
									<Radio value="large">Large</Radio>
								</Stack>
							</RadioGroup>
						</Box>
						<Box
							bgColor="gray.100"
							w="250px"
							aspectRatio="1 / 1"
							display="flex"
							flexDirection="column"
							justifyContent="center"
							alignItems="center"
						>
							<CollagePreview classText={fontValue + " " + fontSize} text={textValue} />
						</Box>
					</Box>
					<Button onClick={addShape()}>
						Add
					</Button>
				</Card>
			</Box>
		</Box>
	);
}

export default Collage;
