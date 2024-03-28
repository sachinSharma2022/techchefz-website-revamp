import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { slideUp } from "./animation";

const TextRevel = ({ children }) => {
  const isNormalScreen = useMediaQuery({ query: "(min-width: 1199px)" });
  return (
    <>
      {isNormalScreen ? (
        <motion.div
          variants={slideUp}
          initial="initial"
          whileInView="enter"
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
export default TextRevel;
