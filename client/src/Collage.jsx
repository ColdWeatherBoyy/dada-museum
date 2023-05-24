import { Box } from "@chakra-ui/react"
import { useRef, useState } from "react";
import CollageElement from "./CollageElement";

function Collage() {

    const collageBoundary = useRef();
    const [collageElements, setCollageElements] = useState(["box", "box"]); 

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
                            return <CollageElement collageBoundary={collageBoundary} classText={element} key={index}/>
                        })
                    }
                </Box>
                <Box
                    bgColor="white"
                    w="30%"
                    minH="90vh"
                >
                </Box>
            </Box>
        </Box>
    );
}

export default Collage;