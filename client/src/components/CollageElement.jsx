import { motion } from "framer-motion";
import "../styles/dragStyles.css";

function CollageElement({ collageBoundary, classText, text }) {
	return (
		<motion.div
			className={classText}
			drag={true}
			dragMomentum={false}
			dragConstraints={collageBoundary}
			dragElastic={false}
		>
			{text}
		</motion.div>
	);
}

export default CollageElement;
