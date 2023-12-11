import React, { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Contact from './Contact';
import { Text, Container, Flex, Box, useColorModeValue } from '@chakra-ui/react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import ProjectCards from "../components/portfolio/ProjectCards";
import TextAnimation from "../components/home/TextAnimation";
import data from "../data/data.json";


const Animation = ({ children, delay = 0 }) => (
    <motion.div
        initial={ { opacity: 0, y: -20 } }
        animate={ { opacity: 1, y: 0 } }
        exit={ { opacity: 0 } }
        transition={ { duration: 1, delay } }
    >
        { children }
    </motion.div>
);

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ ref }>
            <span
                style={ {
                    transform: isInView ? "none" : "translateX(-200px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                } }
            >
                { children }
            </span>
        </section>
    );
}

function Home() {
    const textColor = useColorModeValue("#72b3df", "#90cdf4");
    const modeBg = useColorModeValue("#ffffff", "gray.800");
    const elementRef = useRef(null);
    const headerTitle = data.Header.title;
    const headerBody = data.Header.body;

    const handleClick = () => {
        elementRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Box className="intro-container" h="100vh" pt="10em" bg={modeBg}>
                <Box className="intro">
                    <Container w="100vw" display="flex" alignItems="center" justifyContent="center">
                        <Box px="6">
                            <Animation delay={ 2 }>
                                <Text id="intro-text" fontSize={ { base: "22px", md: "25px", lg: "35px" } }>{ headerTitle }</Text>
                            </Animation>
                            <Box color={ textColor }>
                                <TextAnimation />
                            </Box>
                            <Animation delay={ 2.5 }>
                                <Text id="intro-text" fontSize={ { base: "16px", md: "25px", lg: "25px" } } fontWeight="400">
                                    { headerBody }
                                </Text>
                            </Animation>
                        </Box>
                    </Container>
                </Box>
                <Flex pt="3" justifyContent="center">
                    <Animation delay={ 3.5 }>
                        <Box className="btn-animation" color={ textColor }>
                            <button id="down-arrow" onClick={ handleClick }><MdKeyboardArrowDown /></button>
                        </Box>
                    </Animation>
                </Flex>
            </Box>

            <Section>
                <div ref={ elementRef } style={ { paddingTop: "2em" } }>
                    <Box pt={ { base: "2em", md: "3em", lg: "4em" } } bg={modeBg}>
                        <ProjectCards />
                    </Box>
                </div>
            </Section>

            <Section>
                <Box className="contact-container" pb="250px" width="lg">
                    <Contact />
                </Box>
            </Section>
        </>
    )
}

export default Home