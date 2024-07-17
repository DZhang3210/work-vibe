import { motion, AnimatePresence } from "framer-motion"

const variants = {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition: {
            duration: 0.2 // Adjust duration as needed
        }
    },
    exit:{
        opacity:0,
        transition: {
            duration: 0.2 // Adjust duration as needed
        }
    }
}

export const DropdownTransition = ({children}) =>{
    return(
        // <AnimatePresence wait>
            <motion.div
                variants = {variants}
                initial = "initial"
                animate = "animate"
                exit = "exit"
            >
                {children}
            </motion.div>
        // </AnimatePresence>
    )
}