import React from "react";
import { Typewriter } from "react-simple-typewriter";
import {
  Grid,
  GridItem,
  Image,
  Text,
  useColorModeValue,
  Link,
  Box,
} from "@chakra-ui/react";
import { FaArrowCircleDown, FaGithub, FaLinkedinIn } from "react-icons/fa";

import { motion } from "framer-motion";
function Home() {
  const color = useColorModeValue("blue.300", "white");
  return (
    <Box id="home" pt={{ sm: "0px", md: "130px"}} m="70px">
      <Grid
        w={{ base: "80%", sm: "80%", md: "90%" }}
        m="auto"
        gap="20px"
        alignItems={"center"}
        textAlign={"center"}
        templateColumns={{ base: "auto", md: "60% 40%" }}
      >
        <GridItem mt={{ base: "0px", sm: "0px", md: "0px" }}>
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
            <Text fontSize="20px" as="b">
              <span style={{ color: "orange" }}>Hi, </span>I am
            </Text>
            <br />
            <i>
              {" "}
              <Text
                fontSize={{ base: "20px", sm: "20px", md: "40px" }}
                as="b"
                color="#2B6CB0"
              >
                Karthik Alakunta
              </Text>
            </i>
            <br />
            <Text m="auto 0" as="b">
              {" "}
              <span
                style={{
                  color: color === "white" ? "white" : "black",
                  fontWeight: "bold",
                }}
              >
                <Typewriter
                  words={[
                    "< Full Stack Web Developer />",
                    "< Front End Developer />",
                    "< Backend Developer />",
                  ]}
                  loop={5}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={500}
                />
              </span>
            </Text>
            <Text
              pt="20px"
              color={color === "white" ? "white" : "gray.700"}
              w="90%"
              m="auto"
            >
              A Mern Stack Developer who loves solving problems and building
              projects. I am equipped with a variety of technologies and tools
              to help me build the best possible product.
            </Text>

            <Box
              mt="20px"
              display={"flex"}
              textAlign="center"
              justifyContent={"center"}
            >
              <Link
                target={"_blank"}
                ml="20px"
                href="https://www.linkedin.com/in/karthikalakunta"
              >
                <FaLinkedinIn size={"30px"} />
              </Link>
              <Link
                target={"_blank"}
                mx="20px"
                href="https://github.com/Karthik2917k"
              >
                <FaGithub size={"30px"} />
              </Link>
              <Box
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1T91PahLaInuTS6za3OwvctY__6ZZ1W9h/view?usp=sharing",
                    "_blank"
                  );
                }}
              >                <a
                  href="https://github.com/Karthik2917k/Karthik2917k.github.io/raw/master/public/assets/Karthik-Alakunta-Resume.pdf"
                  download={"Karthik-Alakunta-Resume"}
                >
                  <FaArrowCircleDown size={"30px"} />
                </a>
              </Box>
            </Box>
          </motion.div>
        </GridItem>
        <GridItem pl={{ base: "40px" }} m="auto">
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
            <Image
              w={{ base: "300px", sm: "300px", md: "400px", lg: "500px" }}
              h={{ base: "300px", sm: "300px", md: "400px", lg: "500px" }}
              borderTopLeftRadius={color === "white" ? "50%" : "20px"}
              borderBottomRightRadius={color === "white" ? "50%" : "20px"}
              borderTopRightRadius={color === "white" ? "50%" : "20px"}
              borderBottomLeftRadius={color === "white" ? "0px" : "20px"}
              src="https://camo.githubusercontent.com/8ba1e66bcfa048214cf17f235c341742347c9c248831d044aa888acbeec89502/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313239323637372f73637265656e73686f74732f363133393136372f6d656469612f66636637666430633631396262383737303635333330373932343039313566332e676966"
            />
          </motion.div>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Home;
