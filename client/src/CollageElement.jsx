import { motion } from "framer-motion"
import "./styles/dragStyles.css";

function CollageElement({ collageBoundary }) {

    return (
            <motion.div 
                className="box"
                drag={true}
                dragMomentum={false}
                dragConstraints={collageBoundary}
                dragElastic={false}
            />
    );
}

export default CollageElement;