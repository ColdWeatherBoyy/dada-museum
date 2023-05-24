import { Box, Radio, RadioGroup, Stack, Button } from "@chakra-ui/react"
import { useRef, useState, useEffect } from "react";
import CollageElement from "./CollageElement";

function Collage() {

    const collageBoundary = useRef();
    const [collageElements, setCollageElements] = useState([{type: "box", color: "blue"}, {type: "box", color: "blue"}]);
    const [colorValue, setColorValue] = useState("red");

    const addShape = () => {
        console.log("submitted");
        console.log(collageElements);
        const newShape = {
            type: "box",
            color: colorValue
        };
        const newArray = [...collageElements, newShape];
        setCollageElements(newArray);
        console.log(collageElements);
    }

    useEffect(() => {
        console.log(collageElements);
    },[])

    return (
        <Box
            bgColor="yellow.300"
            w="100%"
            minH="100vh"
        >
            Collage
            <Box
                mx="1vw"
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Box
                    bgColor="white"
                    w="60%"
                    minH="90vh"
                    ref={collageBoundary}
                >
                    {
                        collageElements.map((element, index) => {
                            return <CollageElement collageBoundary={collageBoundary} classText={element.type + " " + element.color} key={index}/>
                        })
                    }
                </Box>
                <Box
                    bgColor="white"
                    w="30%"
                    minH="90vh"
                >
                    <RadioGroup
                        onChange={setColorValue}
                        value={colorValue}
                    >
                        <Stack direction='row'>
                            <Radio value='red'>Red</Radio>
                            <Radio value='blue'>Blue</Radio>
                        </Stack>
                    </RadioGroup>
                    <Button onClick={addShape}>Submit</Button>
                </Box>
            </Box>
        </Box>
    );
}

export default Collage;