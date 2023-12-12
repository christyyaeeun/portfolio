import React from 'react';
import {
    Box,
    Center,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';

interface ProjectCardProps {
    name: string;
    topic: string;
    tag: string;
    description: string;
    imgURL: string;
    onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    name,
    topic,
    tag,
    description,
    imgURL,
    onClick,
}) => {

    return (
        <div className="portfolio-item" onClick={ onClick }>
            <Center p={ 6 }>
                <Box
                    className="hover-bg"
                    position="relative"
                    maxW="445px"
                    w="full"
                    bg={ useColorModeValue('white', 'gray.900') }
                    boxShadow="2xl"
                    rounded="md"
                    overflow="hidden"
                >
                    <div className="hover-text">
                        <Heading>{ name }</Heading>
                        { topic }
                        <h4>{ tag }</h4>
                    </div>
                    <img src={ imgURL } className="img-responsive" alt={ name } />{ ' ' }
                </Box>
            </Center>
        </div>
    );
};

export default ProjectCard;
