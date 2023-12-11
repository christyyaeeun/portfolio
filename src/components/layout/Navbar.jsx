import React from 'react'
import { Link, NavLink } from "react-router-dom";
import {
    Box,
    Flex,
    IconButton,
    Stack,
    Button,
    useColorModeValue,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useColorMode,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
} from '@chakra-ui/icons';
import { createIcon } from '@chakra-ui/icons'
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const LogoIcon = createIcon({
    displayName: 'LogoIcon',
    viewBox: '0 0 1024 1024',
    d: 'M472.148 60.0849C458.317 61.6286 444.64 64.0985 431.117 67.4947C417.594 70.8908 403.764 75.2132 389.626 80.4617C375.489 85.7103 361.505 91.7307 347.674 98.523C333.844 105.315 320.475 112.725 307.566 120.752C294.658 128.78 283.901 136.035 275.295 142.518C266.69 149.002 251.015 163.667 228.272 186.514C205.529 209.361 189.854 226.496 181.249 237.919C172.643 249.342 164.96 260.457 158.198 271.263C151.437 282.069 143.907 295.962 135.609 312.943C127.31 329.924 121.01 344.28 116.707 356.012C112.404 367.744 108.255 381.174 104.26 396.303C100.264 411.431 96.8836 427.948 94.1175 445.855C91.3515 463.762 89.6611 477.81 89.0464 487.998C88.4317 498.187 88.4317 512.852 89.0464 531.994C89.6611 551.136 91.3515 569.814 94.1175 588.03C96.8836 606.246 100.264 622.918 104.26 638.046C108.255 653.174 112.712 667.376 117.629 680.652C122.547 693.928 128.079 707.049 134.226 720.016C140.372 732.983 146.519 744.716 152.666 755.213C158.813 765.71 166.035 776.825 174.334 788.557C182.632 800.289 191.698 811.867 201.533 823.29C211.368 834.713 220.589 844.593 229.194 852.929C237.8 861.265 247.174 869.601 257.316 877.937C267.458 886.273 278.215 894.3 289.587 902.019C300.958 909.737 312.176 916.684 323.241 922.859C334.305 929.033 347.367 935.362 362.427 941.846C377.486 948.33 391.317 953.578 403.918 957.592C416.519 961.605 431.117 965.31 447.714 968.706C464.31 972.103 478.909 974.418 491.51 975.653C504.111 976.888 517.634 977.66 532.079 977.969C546.524 978.277 567.27 976.734 594.316 973.337C621.362 969.941 645.949 965.465 668.078 959.907C690.206 954.35 710.798 948.021 729.853 940.92C748.909 933.819 767.195 925.328 784.714 915.449C802.232 905.569 815.294 897.233 823.9 890.441C832.505 883.649 839.728 877.319 845.567 871.453C851.407 865.587 858.783 856.325 867.696 843.667C876.609 831.008 882.756 820.974 886.137 813.565C889.517 806.155 892.437 798.282 894.896 789.946C897.354 781.61 899.045 774.509 899.967 768.643C900.889 762.777 901.35 754.904 901.35 745.024C901.35 735.145 899.813 723.876 896.74 711.217C893.666 698.559 889.056 686.672 882.909 675.558C876.763 664.443 869.694 655.335 861.703 648.234C853.712 641.133 846.95 636.039 841.418 632.952C835.886 629.864 829.432 626.931 822.056 624.153C814.68 621.374 806.228 619.058 796.7 617.206C787.173 615.354 776.569 614.582 764.89 614.89C753.211 615.199 743.837 616.28 736.769 618.132C729.7 619.985 716.638 626.159 697.583 636.657C678.527 647.154 661.47 654.718 646.41 659.349C631.35 663.98 615.522 667.376 598.926 669.537C582.329 671.699 564.196 672.316 544.526 671.39C524.857 670.464 510.873 669.229 502.574 667.685C494.276 666.141 484.441 663.671 473.07 660.275C461.698 656.879 452.17 653.637 444.487 650.55C436.803 647.463 426.968 642.677 414.982 636.194C402.996 629.71 392.7 623.535 384.094 617.669C375.489 611.803 366.115 604.702 355.972 596.366C345.83 588.03 336.917 579.694 329.234 571.358C321.55 563.022 314.942 554.995 309.41 547.276C303.878 539.558 298.039 529.987 291.892 518.564C285.745 507.14 280.52 495.717 276.217 484.294C271.915 472.87 268.226 460.829 265.153 448.171C262.08 435.513 259.928 424.398 258.699 414.827C257.47 405.256 256.701 394.141 256.394 381.483C256.086 368.825 256.394 356.938 257.316 345.824C258.238 334.709 259.467 324.984 261.004 316.648C262.541 308.312 265.307 297.043 269.302 282.841C273.298 268.639 278.83 254.591 285.899 240.698C292.967 226.804 300.036 214.764 307.105 204.575C314.174 194.387 322.78 183.89 332.922 173.084C343.064 162.278 353.36 152.553 363.81 143.908C374.259 135.263 385.477 127.081 397.464 119.363C409.45 111.644 422.973 104.235 438.033 97.1337C453.092 90.0327 467.076 84.6297 479.985 80.9249C492.893 77.22 505.494 74.7501 517.788 73.5151C530.081 72.2801 536.536 71.1995 537.15 70.2733C537.765 69.3471 537.919 67.8034 537.611 65.6422C537.304 63.4811 536.228 61.9374 534.384 61.0111C532.54 60.0849 525.164 59.3131 512.256 58.6956C499.347 58.0781 485.978 58.5412 472.148 60.0849ZM572.648 60.548C570.497 62.4005 569.421 64.4073 569.421 66.5684C569.421 68.7296 569.882 70.2733 570.804 71.1995C571.726 72.1258 577.258 73.3607 587.401 74.9044C597.543 76.4481 607.992 79.0724 618.749 82.7773C629.506 86.4822 641.8 91.8851 655.63 98.9861C669.461 106.087 682.369 113.651 694.355 121.679C700.349 125.692 706.342 129.706 712.335 133.719C706.956 136.189 701.578 138.659 696.199 141.129C685.443 146.069 677.452 150.391 672.227 154.096C667.002 157.801 661.777 162.123 656.552 167.063C651.328 172.003 645.488 178.95 639.034 187.903C632.58 196.857 627.048 206.736 622.438 217.542C617.827 228.348 614.6 239.154 612.756 249.96C610.912 260.766 609.99 269.719 609.99 276.82C609.99 283.921 610.451 290.868 611.373 297.66C612.295 304.453 614.139 312.325 616.905 321.279C619.671 330.232 624.282 340.266 630.736 351.381C637.19 362.496 643.49 371.295 649.637 377.778C655.784 384.262 662.699 390.282 670.383 395.84C678.066 401.397 686.979 406.337 697.122 410.659C707.264 414.981 716.177 417.914 723.86 419.458C731.544 421.002 739.227 421.928 746.911 422.237C754.594 422.546 763.968 421.774 775.033 419.921C786.097 418.069 797.007 414.827 807.764 410.196C818.521 405.565 826.666 401.397 832.198 397.692C837.73 393.987 843.877 388.893 850.639 382.409C857.4 375.926 863.701 368.516 869.54 360.18C875.38 351.844 880.143 343.508 883.831 335.172C887.52 326.836 890.439 318.037 892.591 308.775C894.742 299.513 895.971 289.324 896.279 278.21C896.586 267.095 895.818 256.443 893.974 246.255C892.13 236.067 890.132 228.039 887.981 222.173C885.829 216.307 881.987 208.589 876.455 199.018C870.923 189.447 864.008 180.339 855.71 171.694C847.412 163.05 838.038 155.022 827.588 147.613C817.138 140.203 806.689 133.256 796.239 126.773C785.79 120.289 773.189 113.343 758.436 105.933C743.684 98.523 729.239 92.0395 715.101 86.4822C700.963 80.9249 686.365 75.985 671.305 71.6627C656.245 67.3403 641.032 63.9442 625.665 61.4742C610.298 59.0043 598.158 57.7694 589.245 57.7694C580.332 57.7694 574.8 58.6956 572.648 60.548Z'
})


export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { colorMode, toggleColorMode } = useColorMode();
    const textMode = useColorModeValue("colorMode.light", "colorMode.dark")

    const btnRef = React.useRef()

    function handleSelect() {
        onClose();
    }
    const handleViewResume = () => {
        window.open('https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/portfolio%20files%2Fproject%20files%2FPortfolio-Resume.pdf?alt=media&token=1ad1ce8d-6802-4015-9602-e7a0d674a318', '_blank');
    };

    return (
        <nav>
            <Box w="100vw" position="fixed" top="0" zIndex="999">
                <Flex
                    bg={ useColorModeValue('white', '#2c313d') }
                    minH={ '60px' }
                    py={ { base: 2 } }
                    px={ { base: 4 } }
                    borderBottom={ 1 }
                    borderStyle={ 'solid' }
                    borderColor={ useColorModeValue('gray.200', 'whiteAlpha.400') }
                    align={ 'center' }>
                    <Stack
                        flex={ { base: 1, md: 0 } }
                        justify={ 'flex-start' }
                        direction={ 'row' }
                        spacing={ 6 }>
                        <Box px="2">
                            <Link id="c-icon" to="/" color={ useColorModeValue('#363737', 'white') }>
                                <LogoIcon w={ { base: "2em", lg: "2.2em" } } h={ { base: "2em", lg: "2.2em" } } />
                            </Link>
                        </Box>

                    </Stack>

                    <Flex flex={ { base: 1 } } justify={ { base: 'center', md: 'start' } }>

                        <Flex
                            justifyContent="flex-end"
                            flex={ { base: 1, md: 'auto' } }
                            ml={ { base: -2 } }
                            display={ { base: 'flex', md: 'none', lg: 'none' } }>

                            <IconButton
                                ref={ btnRef }
                                isOpen={ isOpen }
                                onClick={ onOpen }
                                icon={
                                    isOpen ? <CloseIcon w={ 3 } h={ 3 } /> : <HamburgerIcon w={ 5 } h={ 5 } />
                                }
                                variant={ 'ghost' }
                                aria-label={ 'Toggle Navigation' }
                            />
                            <Button className="color-toggle" variant="ghost" display={ { base: 'flex', md: 'none', lg: 'none' } } onClick={ toggleColorMode }>
                                { colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
                            </Button>
                        </Flex>

                        {/* DESKTOP NAVBAR */ }
                        <Flex className="nav-link" style={ { "--text-color": textMode, "--highlight-color": "#0461cf7d" } } fontSize="large" fontWeight="700" display={ { base: 'none', md: 'flex' } } ml={ 10 }>
                            <NavLink className="link" to="/">Home</NavLink>
                            <NavLink className="link" to="/about">About</NavLink>
                            <NavLink className="link" to="/portfolio">Portfolio</NavLink>
                            <NavLink className="link" to="/contact">Contact</NavLink>
                        </Flex>
                    </Flex>
                    <Button display={ { base: "none", lg: "block" } } colorScheme="blue" variant={ useColorModeValue("outline", "solid") } onClick={ handleViewResume }>View Resume</Button>

                    <Button className="color-toggle" color={ useColorModeValue('#363737', 'white') } variant="ghost" display={ { base: 'none', md: 'flex', lg: 'flex' } } onClick={ toggleColorMode }>
                        { colorMode === 'light' ? <MoonIcon /> : <SunIcon /> }
                    </Button>

                </Flex>
                <Drawer
                    isOpen={ isOpen }
                    placement='right'
                    onClose={ onClose }
                    finalFocusRef={ btnRef }
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerBody>
                            <Stack bg={ useColorModeValue('white', 'gray.700') } p={ 4 }>
                                <Flex
                                    className="nav-link"
                                    // color={ textColor }
                                    alignItems="flex-start"
                                    style={ { "--text-color": textMode, "--highlight-color": "#0461cf7d" } }
                                    fontSize="large"
                                    fontWeight="700"
                                    display={ { base: 'flex', md: 'none' } }
                                    flexDirection="column"
                                    ml={ 10 }
                                    whiteSpace="nowrap"
                                    m="1em"
                                >
                                    <NavLink className="link" onClick={ handleSelect } to="/">Home</NavLink>
                                    <NavLink className="link" to="/about" onClick={ handleSelect }>About</NavLink>
                                    <NavLink className="link" to="/portfolio" onClick={ handleSelect }>Portfolio</NavLink>
                                    <NavLink className="link" to="/contact" onClick={ handleSelect }>Contact</NavLink>

                                </Flex>
                            </Stack>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>

        </nav>
    );


}



