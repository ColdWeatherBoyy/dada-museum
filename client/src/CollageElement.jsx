import { motion } from "framer-motion"
import "./styles/dragStyles.css";

function CollageElement({ collageBoundary, classText, key }) {

    return (
            <motion.div 
                className={classText}
                drag={true}
                dragMomentum={false}
                dragConstraints={collageBoundary}
                dragElastic={false}
            />
    );
}

export default CollageElement;