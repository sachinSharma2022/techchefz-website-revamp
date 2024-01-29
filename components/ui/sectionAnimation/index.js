import { slideUp } from "./animation";
import { motion} from "framer-motion";


const TextRevel=({children})=>{
    return(
        <>       
        <motion.div
                  variants={slideUp}
                  initial="initial"
                  whileInView="enter"
                >
                  {children}
                </motion.div>
        </>
    )
}
export default TextRevel