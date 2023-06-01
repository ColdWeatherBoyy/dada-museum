import { motion } from "framer-motion"

function CollagePreview({ classText, text }) {

    return (
            <motion.div 
                className={classText}
            >
                {text}
            </motion.div>
    );
}

export default CollagePreview;