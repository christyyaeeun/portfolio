import React, { useState } from 'react'
import { Box, Container, Heading, SimpleGrid, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import data from '../../data/data.json';

const ProjectCards = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ selectedProject, setSelectedProject ] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        onOpen();
    };

    const closeModal = () => {
        setSelectedProject(null);
        onClose();
    };

    return (
        <>
            <Box className="portfolio-wrapper" w="100vw" pb="5em" bg={ useColorModeValue('white', 'gray.800') }>
                <Container maxW="100vw" className="experience-container" mt="2em" pb="5em">
                    <Container mt="2em" maxW={ { base: "md", md: "3xl", lg: "4xl" } }>
                        <Heading id="heading-title">Projects</Heading>
                    </Container>
                    <motion.div
                        transition={ { duration: 1.5, delay: .1 } }
                        initial={ { opacity: 0, y: 50 } }
                        animate={ { opacity: 1, y: 20 } }
                        exit={ { opacity: 0 } }
                    >
                        <SimpleGrid columns={ [ 1, null, 2 ] } minChildWidth="350px" maxW="3xl" margin="0 auto" justifyContent="center" justifyItems={ { lg: "center" } }>
                            { data.Projects.map((project, index) => (
                                <ProjectCard
                                    key={ index }
                                    name={ project.name }
                                    topic={ project.topic }
                                    tag={ project.tag }
                                    description={ project.description }
                                    imgURL={ project.imgCover }
                                    onClick={ () => openModal(project) }
                                />
                            )) }
                        </SimpleGrid>
                    </motion.div>
                </Container>
                <ProjectModal
                    project={ selectedProject }
                    isOpen={ isOpen }
                    onClose={ closeModal }
                />
            </Box>
        </>
    );
};

export default ProjectCards;