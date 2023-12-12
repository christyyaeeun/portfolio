import { Heading, Text, Box, Container, SimpleGrid, useColorModeValue, Flex, } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { AiFillHtml5 } from 'react-icons/ai'
import { FaCss3Alt, FaReact, FaFigma } from 'react-icons/fa'
import { SiJavascript, SiFirebase, SiAwsamplify } from 'react-icons/si'
import { TbBrandVscode } from 'react-icons/tb'
import data from '../data.json'
import { motionProps } from '../utils/motionProps'

const SkillIcon = ({ Icon, title, color }) => (
  <Box className="box-icon">
    <Icon color={ color } />
    <Text className="icon-title">{ title }</Text>
  </Box>
);

const About = () => {
  const color = useColorModeValue('#65a1c8', '#aed7f5');
  const aboutSummary = data.About.summary;

  const skillsData = [
    { Icon: AiFillHtml5, title: "HTML5" },
    { Icon: FaCss3Alt, title: "CSS3" },
    { Icon: SiJavascript, title: "JavaScript" },
    { Icon: FaReact, title: "React" },
    { Icon: SiFirebase, title: "Firebase" },
    { Icon: SiAwsamplify, title: "AWS Amplify" },
    { Icon: TbBrandVscode, title: "VS Code" },
    { Icon: FaFigma, title: "Figma" },
  ];

  return (
    <>
      <motion.div { ...motionProps }>
        <Container
          pt={ { base: "3em", md: "4em", lg: "5em" } }
          pb={ { base: "5em", md: "6em", lg: "12em" } }
          px={ { base: "1.3em", md: "2em", lg: "3em" } }
          maxW={ { base: "xl", md: "2xl", lg: "3xl" } }
        >
          <Box my="2em">
            <Box>
              <Heading mb=".5em" id="heading-title">
                About Me
              </Heading>
            </Box>
            <Flex>
              <Text
                pb="3"
                fontSize={ { base: "16px", md: "18px", lg: "20px" } }
                id="about-text"
              >
                { aboutSummary }
              </Text>
            </Flex>
          </Box>

          <Box
            id="skills-container"
            pb={ { base: "1em", md: "2em", lg: "5em" } }
          >
            <Heading mt=".5em" pb="1em" id="heading-title">
              Skills
            </Heading>
            <div className="icon-wrap">
              <SimpleGrid
                color={ useColorModeValue("#505050", "white") }
                columns={ [ 2, null, 4 ] }
                gridGap={ { base: "10px 80px" } }
              >
                { skillsData.map((skill, index) => (
                  <SkillIcon
                    key={ index }
                    Icon={ skill.Icon }
                    title={ skill.title }
                    color={ color }
                  />
                )) }
              </SimpleGrid>
            </div>
          </Box>
        </Container>
      </motion.div>
    </>
  );
};

export default About;
