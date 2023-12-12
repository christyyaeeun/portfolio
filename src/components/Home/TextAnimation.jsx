import { motion } from "framer-motion";
import { Heading } from "@chakra-ui/react";

const TextAnimation = () => {
    const text = "Christy Park";

    return (
        <motion.div className="animated-text">
            <Heading fontSize={ { base: "4xl", md: "5xl", lg: "6xl" } }>
                { text.split("").map((letter, index) => (
                    <motion.span
                        key={ index }
                        initial={ { opacity: 0 } }
                        animate={ { opacity: 1 } }
                        transition={ { duration: 0.1, delay: index * 0.2 } }
                    >
                        { letter }
                    </motion.span>
                )) }
            </Heading>
        </motion.div>
    );
}
export default TextAnimation;