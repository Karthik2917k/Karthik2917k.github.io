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

import { motion } from "framer-motion";
function Home() {
  const color = useColorModeValue("blue.300", "white");
  return (
    <section id="home" >
      <Grid
        w={{ base: "80%", sm: "80%", md: "90%" }}
        h="95vh"
        m="auto"
        pt="80px"
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
                color="gray.300"
              >
                Karthik <span style={{ color: "#2B6CB0" }}>Alakunta</span>
              </Text>
            </i>
            <br />
            <Text m="auto 0" as="b">
              {" "}
              <span style={{ color: color, fontWeight: "bold" }}>
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
                  delaySpeed={1000}
                />
              </span>
            </Text>
            <Text pt="20px" color={"gray.500"} w="90%" m="auto">
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
                ml="30px"
                w="40px"
                h="40px"
                href="https://www.linkedin.com/in/karthikalakunta/"
              >
                <Image
                  src="https://i.ibb.co/kyyyvt3/linkedin.png"
                  alt="Linkedin"
                />
              </Link>
              <Link
                ml="30px"
                w="40px"
                h="40px"
                href="https://github.com/Karthik2917k"
              >
                <Image src="https://i.ibb.co/f27qSSp/github.png" alt="github" />
              </Link>
              <Link
                ml="30px"
                w="40px"
                h="40px"
                href="https://drive.google.com/drive/folders/1ED1T5Fk-LHM6x7KEdIM2u7_gM-0Vz2_E"
              >
                <Image
                  src="https://i.ibb.co/5Gj414m/download.png"
                  alt="Resume"
                />
              </Link>
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
              borderTopLeftRadius={color === "white" ? "300px" : "20px"}
              borderBottomRightRadius={color === "white" ? "300px" : "20px"}
              borderTopRightRadius={color === "white" ? "300px" : "20px"}
              borderBottomLeftRadius={color === "white" ? "0px" : "20px"}
              src="https://camo.githubusercontent.com/8ba1e66bcfa048214cf17f235c341742347c9c248831d044aa888acbeec89502/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f313239323637372f73637265656e73686f74732f363133393136372f6d656469612f66636637666430633631396262383737303635333330373932343039313566332e676966"
              alt="Dan Abramov"
            />
          </motion.div>
        </GridItem>
      </Grid>
    </section>
  );
}

export default Home;

// <div className="homee">
// <div>
//   <p className="p1">Looking for a Developer!</p>
//   <p className="p2">Hello my name is</p>
//   <p className="name">Karthik <span className="namee">Alakunta</span></p>
//   <p className="role">And I'm a <span className="rolee">Full Stack Web Developer</span></p>
// </div>
// <div>
//   <img
//     src="https://i.postimg.cc/tgNnWQYQ/photostudio-1-designify.png"
//     alt="karthik"
//   />
// </div>
// </div>
// <div className="icons">
// <a href="https://github.com/Karthik2917k" target="blank"><img src="https://img.icons8.com/sf-black/344/github.png" alt="github" /></a>
// <a href="https://www.linkedin.com/in/karthikalakunta/" target="blank"><img src="https://img.icons8.com/ios-filled/344/linkedin.png" alt="Linked in" /></a>
// <a href="https://drive.google.com/drive/u/0/folders/1ED1T5Fk-LHM6x7KEdIM2u7_gM-0Vz2_E" target="blank"><img src="https://img.icons8.com/sf-black/344/download.png" alt="Resume" /></a>
// </div>
