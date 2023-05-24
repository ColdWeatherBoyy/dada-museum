import { Box } from "@chakra-ui/react"
import { useRef, useState } from "react";
import CollageElement from "./CollageElement";

function Collage() {

    const collageBoundary = useRef();

    return (
        <Box
            bgColor="yellow.300"
            w="100%"
            minH="100vh"
            ref={collageBoundary}
        >
            Collage
            <CollageElement collageBoundary={collageBoundary}/>
        </Box>
    );
}

export default Collage;