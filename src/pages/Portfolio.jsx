import React from 'react'
import { motion } from 'framer-motion'
import ProjectCards from '../components/Portfolio/ProjectCards'
import { Box } from '@chakra-ui/react'
import { motionProps } from '../utils/motionProps'

const Portfolio = () => {
    return (
        <>
            <motion.div { ...motionProps }>
                <Box className="portfolio-container" pt={ { base: "3em", md: "4em", lg: "5em" } } pb="5em">
                    <ProjectCards />
                </Box>
            </motion.div>
        </>
    )
}

export default Portfolio