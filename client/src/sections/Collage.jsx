import { Box, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import CollageElement from "../components/CollageElement";

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
		console.log(collageElements);
	}, []);

	return (
		<Box bgColor="yellow.300" w="100%" minH="100vh">
			Collage
			<Box mx="1vw" display="flex" flexDirection="row" justifyContent="space-between">
				<Box bgColor="white" w="60%" minH="90vh" ref={collageBoundary}>
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
				</Box>
				<Box bgColor="white" w="30%" minH="90vh">
					<RadioGroup onChange={setTextValue} value={textValue}>
						<Stack direction="row">
							<Radio value="D">D</Radio>
							<Radio value="A">A</Radio>
							<Radio value="d">d</Radio>
							<Radio value="a">a</Radio>
							<Radio value="!">!</Radio>
							<Radio value="?">?</Radio>
						</Stack>
					</RadioGroup>
					<RadioGroup onChange={setFontValue} value={fontValue}>
						<Stack direction="row">
							<Radio value="serif">Serif</Radio>
							<Radio value="sans-serif">Sans-Serif</Radio>
						</Stack>
					</RadioGroup>
					<RadioGroup onChange={setFontSize} value={fontSize}>
						<Stack direction="row">
							<Radio value="small">Small</Radio>
							<Radio value="medium">Medium</Radio>
							<Radio value="large">Large</Radio>
						</Stack>
					</RadioGroup>
					<Button onClick={addShape}>Submit</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default Collage;
