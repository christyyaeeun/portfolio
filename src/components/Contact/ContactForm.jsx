import React from 'react';
import { Container, Heading, useColorModeValue, Box, useToast, } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
    ContactCreateForm
} from '../../ui-components';
import { motionProps } from '../../utils/motionProps';

const ContactComponent = ({ mtValue }) => {
    const toast = useToast();

    const handleSuccess = () => {
        // Display success toast
        toast({
            title: 'Form submitted successfully!',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    const handleError = (errorMessage) => {
        // Display error toast
        toast({
            title: 'Error submitting form',
            description: errorMessage,
            status: 'error',
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <Box id="contact" mt={ mtValue }>
            <motion.div { ...motionProps }>
                <Container
                    className="contact-wrap"
                    w={ { base: 'sm', md: 'md', lg: 'lg' } }
                    maxW="lg"
                    p={ { base: '1em', md: '1.5em', lg: '2em' } }
                    mt="3em"
                    bg={ useColorModeValue('transparent', '#2c313d') }
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor={ useColorModeValue('#E2E8F0', 'gray.700') }
                    boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                >
                    <Heading>Get in Touch</Heading>
                    <Box>
                        <ContactCreateForm onSuccess={ handleSuccess } onError={ handleError } />
                    </Box>
                </Container>
            </motion.div>
        </Box>
    );
};

export default ContactComponent;
