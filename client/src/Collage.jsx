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
            ref={collageBoundary}
        >
            Collage
            {
                collageElements.map((element, index) => {
                    return <CollageElement collageBoundary={collageBoundary} classText={element} key={index}/>
                })
            }
        </Box>
    );
}

export default Collage;