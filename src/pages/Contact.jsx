import React from 'react'
import {
    Container,
    Heading,
    useColorModeValue,
    Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { motionProps } from '../utils/motionProps'

const Contact = () => {

    return (
        <>
            <Box id="contact" mt="6em" bg={ useColorModeValue('white', 'gray.800') }>
                <motion.div { ...motionProps }>
                    <Container className="contact-wrap" w={ { base: "sm", md: "md", lg: "lg" } } maxW="lg" p={ { base: "1em", md: "1.5em", lg: "2em" } } mt="3em" bg={ useColorModeValue('transparent', '#2c313d') } borderRadius="2xl">
                        <Heading>Get in Touch</Heading>
                        <Box>

                        </Box>
                    </Container>
                </motion.div>
            </Box>
        </>

    )
}

export default Contact