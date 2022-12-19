import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { FaLaptopCode, FaGithub } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import Github from "./Github";
const projects = [
  {
    url: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/ayoa.png?raw=true",
    caption: "Ayoa",
    description:
      "It's group project - Ayoa.com is an online Project, Provides a Better Way for Brainstorming, note-taking, and Project Planning. finished project in 7 days and learned lots of new things being a part of team as a member",
    languages: "HTML, CSS, JavaScript",
    github: "https://github.com/Srahul2244/grouchy-dinner-9447",
    live: "https://tiny-rugelach-e3e0ee.netlify.app/",
    video:
      "https://drive.google.com/file/d/1BOf1FNiTXYQK9GWj0FACFaPgGAz8pu43/view?usp=share_link",
  },
  {
    url: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/indeed.png?raw=true",
    caption: "Indeed",
    description:
      "It's my major project - Indeed.com is an recruitment platform that provides hiring-related services to job seekers / corporates and recruiters . finished project in 6-7 days and learned lots of new things.",
    languages: "React, Chakra-UI",
    github: "https://github.com/Karthik2917k/hurried-hospital-4011",
    live: "https://karthik-lime.vercel.app/",
    video:
      "https://drive.google.com/file/d/1Is-rMfs2BSEZIN25njMelI4QIXTXIYI6/view?usp=share_link",
  },
  {
    url: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/asos.png?raw=true",
    caption: "Asos",
    description:
      "It's an individual project - Asos.com is an online shopping site for men clothing. try to implement all the features of an e-commerce website. finished project in 5 days.",
    languages: "HTML, CSS, JavaScript",
    github: "https://github.com/Karthik2917k/new-bucket-3441",
    live: "https://new-bucket-3441.vercel.app/",
    video:
      "https://drive.google.com/file/d/18ecWNcBSxMqNaDi7LCTYkVLiTjYGC2Va/view?usp=share_link",
  },
  {
    url: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/buffer.jpg?raw=true",
    caption: "Buffer.com",
    description:"It's group project -Buffer is a social media management application or tool. It helps you to manage multiple social media networks from one place. It is one of the best time saving methods in the world of social media marketing.",
    languages: "React, Chakra-ui, redux, express, Node js, MongoDB",
    github: "https://github.com/karishma24-max/aberrant-coast-299",
    live: "https://bluelock.vercel.app/",
  },
  {
    url: "https://customercarecontacts.com/wp-content/uploads/2022/04/zee5-website-1024x484.jpg",
    caption: "Zee5-Clone",
    description:
      "This is A Clone Of Zee5 Which is A OTT Application To watch movies and web-series online this is Full-Stack Project With Backend Code Including Admin Side Also",
    github: "https://github.com/Karthik2917k/Zee5-Clone",
    live: "https://temporary-bag-6678.vercel.app/",
  }
];
function Projects() {
  const color = useColorModeValue("blue.300", "white");
  return (
    <Box id="projects">
      <Box pt="50px" textAlign={"center"} w="80%" m="auto">
        <Text fontSize={"6xl"} as="b" color={color}>
          Projects
        </Text>
      </Box>
      <Box
        m="auto"
        margin={{ base: "auto auto", sm: "auto auto", md: "40px 10%" }}
      >
        <div
          className="slide-container"
          style={{
            padding: "50px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
            borderRadius: "20px",
          }}
        >
          <Fade>
            {projects.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div
                  style={{ textAlign: "center" }}
                  className="image-container"
                >
                  <Grid
                    w={"90%"}
                    alignItems="center"
                    m="auto"
                    templateColumns={{
                      base: "100%",
                      sm: "100%",
                      md: "50% 50%",
                    }}
                    borderRadius="20px"
                  >
                    <GridItem ml={{ sm: "15%", md: "0" }} placeItems={"center"}>
                      <Link
                        target={"_blank"}
                        href={fadeImage.live}
                        alt={fadeImage.caption}
                      >
                        <Image
                          w={{ base: "400px", sm: "400px", md: "500px" }}
                          src={fadeImage.url}
                          alt={fadeImage.caption}
                        />
                      </Link>
                    </GridItem>
                    <GridItem w="90%" m="auto">
                      <Text
                        fontSize={"4xl"}
                        as="b"
                      >{`${fadeImage.caption}.com`}</Text>
                      <br />
                      <br />
                      <Text fontWeight={500} color="gray.600" fontSize="18px">
                        {fadeImage.description}
                      </Text>
                      <br />
                      <Text as="b" fontSize="20px">
                        Tech Stacks:{" "}
                        <span style={{ fontSize: "18px" }}>
                          {fadeImage.languages}
                        </span>
                      </Text>
                      <br />
                      <br />
                      <Flex
                        mb="50px"
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        <Link target={"_blank"} href={fadeImage.live}>
                          <FaLaptopCode size={"40px"} />
                        </Link>
                       {
                        fadeImage.video &&  <Link
                        ml="10px"
                        target={"_blank"}
                        href={fadeImage.video}
                      >
                        <MdVideoLibrary size={"40px"} />
                      </Link>
                       }
                        <Link
                          ml="10px"
                          target={"_blank"}
                          href={fadeImage.github}
                        >
                          <FaGithub size={"40px"} />
                        </Link>
                      </Flex>
                    </GridItem>
                  </Grid>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </Box>
      <Github />
    </Box>
  );
}

export default Projects;
