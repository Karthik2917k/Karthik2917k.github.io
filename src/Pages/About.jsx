import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { CalendarIcon, StarIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
function About() {
  const color = useColorModeValue("blue.300", "white");
  return (
    <Box id="about">
      <Box pt="50px" textAlign={"center"} w="80%" m="auto">
        <br />
        <Heading mt={{ base: "16", md: "0" }} color={color}>
          About
        </Heading>

        <Grid
          mt={{ base: "0px", sm: "0px", md: "30px" }}
          templateColumns={{
            base: "repeat(1,fr)",
            sm: "repeat(1,fr)",
            md: "repeat(2,1fr)",
          }}
          gap={5}
          alignItems="center"
        >
          <GridItem pl={{ base: "", sm: "", md: "", lg: "100px" }}>
            <motion.div
              initial={{
                x: -200,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
            >
              <Image
                w="300px"
                h="300px"
                src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/profile.jpg?raw=true"
                backgroundColor={"gray.50"}
                borderRadius="200px"
                border="15px solid lightblue"
                alt="Profile-pic"
              />
            </motion.div>
          </GridItem>
          <GridItem w="100%" textAlign={"left"} m="auto">
            <motion.div
              initial={{
                x: 80,
                opacity: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
            >
              <Text
                fontSize={"20px"}
                fontWeight={600}
                color={color === "white" ? "white" : "black"}
                mb="40px"
              >
                A passionate Developer, with strong administrative and
                communication skills, good attention to detail and with the
                ability to write efficient code using MERN Stack.
              </Text>
              <Text
                fontSize={"20px"}
                fontWeight={600}
                color={color === "white" ? "white" : "black"}
                mb="40px"
              >
                I have been developing Web Apps for over 6 months now. Well
                versed in coding using Javascript and its frameworks.
              </Text>
              <Text
                fontSize={"20px"}
                fontWeight={600}
                color={color === "white" ? "white" : "black"}
                mb="40px"
              >
                As I grow and flourish as a Developer, one thing which keeps me
                going is my inquisitiveness for discovering new things every
                day.
              </Text>
            </motion.div>
          </GridItem>
        </Grid>

        <Box mt="30px 0px 0px 0px">
          <Text
            fontSize={"40px"}
            as="b"
            color={"blue.500"}
            fontFamily={"arial-black"}
            letterSpacing="2px"
          >
            Education
          </Text>
          <br />
          <Grid
            w="100%"
            m="auto"
            templateColumns={{
              base: "100%",
              sm: "100%",
              md: "50% 50%",
              lg: "34% 31% 31%",
            }}
            gap={6}
          >
            <GridItem p="10px" textAlign={"left"}>
              <motion.div
                initial={{
                  x: -200,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
              >
                {" "}
                <Text fontWeight={800}>FULL STACK DEVELOPMENT (Full Time)</Text>
                <Text p={"20px 0px 0px 30px"} fontWeight={500}>
                  • @ Masai School, Bangalore
                </Text>
                <Text pl={"30px"} fontWeight={500}>
                  • <CalendarIcon /> Apr-2022 to present | Remote
                </Text>
              </motion.div>
            </GridItem>
            <GridItem p="10px" textAlign={"left"}>
              <motion.div
                initial={{
                  y: 80,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
              >
                <Text fontWeight={800}>Diploma in Computer Engineering</Text>
                <Text p={"20px 0px 0px 30px"} fontWeight={500}>
                  • Govt. Polytechnic Institute | Gadwal
                </Text>
                <Text pl={"30px"} fontWeight={500}>
                  • <CalendarIcon /> Jun-2018 to May-2022
                </Text>
                <Text pl={"30px"} fontWeight={500}>
                  • <StarIcon color={"orange"} /> Grade 70%
                </Text>
              </motion.div>
            </GridItem>
            <GridItem p="10px" textAlign={"left"}>
              <motion.div
                initial={{
                  x: 80,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
              >
                <Text fontWeight={800}>HIGHER SECONDRY EDUCATION</Text>
                <Text p={"20px 0px 0px 30px"} fontWeight={500}>
                  • @ Z.P.H.S. Boys High School | Pentlvelly
                </Text>
                <Text pl={"30px"} fontWeight={500}>
                  • <CalendarIcon /> Jun-2017 to Apr-2018
                </Text>
                <Text pl={"30px"} fontWeight={500}>
                  • <StarIcon color={"orange"} /> Grade 85%
                </Text>
              </motion.div>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
export default About;
