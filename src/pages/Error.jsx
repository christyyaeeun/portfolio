
import React from 'react'

import {
    Container,
    Stack,
    Box,
    Heading,
    Text,
    Button,
    Image,
    HStack,
} from '@chakra-ui/react';
import { BsArrowLeft } from 'react-icons/bs'
import logo from '../img/q-blue.png'



export default function Error() {
    return (

        <Container id="error-box" minHeight='100vh' h="100%" minWidth="100vw" alignItems='center' justify='center' display='flex' py="3em">
            <Container maxW={ '7xl' }>
          
                    <Stack alignItems="center" spacing={ { base: 3, md: 8 } }>
                        <HStack w="100vw" justifyContent="center">
                            <Box>
                                <Heading className="error-text" fontSize={{base:"8em",md:"9em",lg:"10em"}}>4</Heading>
                            </Box>
                            <Box>

                                <Image
                                className="error-text"
                                    id="error-img"
                                    alt={ 'Error Image' }
                                    fit={ 'cover' }
                                    align={ 'center' }
                                    w={ '100%' }
                                    h={ '100%' }
                                    m='0 auto'
                                    maxW={{base:"150px",md:"180px",lg:'200px'}}
                                src={logo}
                                />
                            </Box>
                            <Box>
                                <Box>
                                    <Heading className="error-text" fontSize={ { base: "8em", md: "9em", lg: "10em" } }>4</Heading>
                                </Box>
                            </Box>
                        </HStack>
                    <Text color={ 'gray.800' } bg='#ffffffbf'>
                            The page you were looking for isn't available or doesn't exist.
                        </Text>
                
                            <Button
                                as="a" href="/"
                                w='10em' h={ 10 }
                                leftIcon={ <BsArrowLeft /> }
                                rounded={ 'md' }
                                size={ 'lg' }
                                fontWeight={ 'normal' }
                                px={ 6 }
                                color={ 'white' }
                                bg={ '#83acd4' }
                                _hover={ { bg: '#b1cde6' } }>
                                Go Back Home
                            </Button>

                    </Stack>

            </Container>
        </Container>

    );
}
