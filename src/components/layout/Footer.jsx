import React from 'react'
import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
    Icon,
} from '@chakra-ui/react';

export default function Footer() {
    const footerBg = useColorModeValue("#d5ebfa", "dark.100")
    const textMode = useColorModeValue("colorMode.light", "colorMode.dark")
    return (
        <>
            <div className="footer">
                <div className="wavy-border">
                    <Icon
                        fill={ footerBg }
                        version="1.1" id="curved-border"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px" y="0px"
                        width="100%" height="100%"
                        viewBox="0 0 1600 116.19">
                        <path className="wave" d="M0.1,119.43V67.45c0,0,99.87,71.51,322.45,8.12c5.56-1.66,92.01-26.52,125.74-35.72c77.28-21.08,219.28-41.4,311.28-38.34c233,7.77,323.98,82.1,469.23,96.61c149.64,14.94,288.45-12.46,371.26-36.99v55.34L0.1,119.43z" />
                    </Icon>
                </div>
                <Box bg={ footerBg }>
                    <Container
                        id="footer"
                        as={ Stack }
                        maxW={ '6xl' }
                        py={ { base: "2", md: "4", lg: "6" } }
                        fontSize={ { base: "sm", md: "md", lg: "lg" } }
                        direction={ { base: 'column', md: 'row' } }
                        spacing={ { base: "1", lg: "4" } }
                        justify={ { base: 'center', md: 'space-between' } }
                        align={ { base: 'center', md: 'center' } }>
                        <Stack className="footer-link" color={ textMode } px={ { base: "1em" } } fontWeight="700" direction={ 'row' } spacing={ { base: "2", md: "3" } }>
                            <Link className="link link-styles" href={ '/home' }>Home</Link>
                            <Link className="link link-styles" href={ '/about' }>About</Link>
                            <Link className="link link-styles" href={ '/portfolio' }>Portfolio</Link>
                            <Link className="link link-styles" href={ '/contact' }>Contact</Link>
                        </Stack>
                        <Text fontWeight="500">© 2023 Christy Park</Text>
                    </Container>
                </Box>
            </div>
        </>
    );
}