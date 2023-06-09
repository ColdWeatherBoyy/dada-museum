import { motion } from "framer-motion";

// Component for previewing the collage elements in the collage section
function CollagePreview({ classText, text }) {
	return <motion.div className={classText}>{text}</motion.div>;
}

export default CollagePreview;
