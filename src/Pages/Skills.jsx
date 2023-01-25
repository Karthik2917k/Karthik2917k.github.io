import React from "react";
import { Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
const DATA = [
  {
    img: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/html.png?raw=true",
    name: "HTML",
  },
  {
    img: "https://raw.githubusercontent.com/Karthik2917k/Karthik2917k.github.io/master/public/assets/css.png",
    name: "CSS",
  },
  {
    img: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/javascript.png?raw=true",
    name: "JavaScript",
  },
  {
    img: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/react.png?raw=true",
    name: "React",
  },
  
  {
    img: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/redux.png?raw=true",
    name: "Redux",
  },
  {
    img: "https://cdn.cdnlogo.com/logos/n/80/next-js.svg",
    name: "Nextjs",
  },
  {
    img: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/typescript.png?raw=true",
    name: "TypeScript",
  },
  {
    img: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/nodejs.png?raw=true",
    name: "Node.js",
  },
  {
    img: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/mongodb.png?raw=true",
    name: "MongoDB",
  },
  {
    img: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/express.png?raw=true",
    name: "Express",
  },
  {
    img: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/git.png?raw=true",
    name: "Git",
  },
  {
    img: "https://www.pngkit.com/png/full/234-2349639_data-structure-algorithms-weak-avl-tree.png",
    name: "DSA",
  },
  {
    img: "https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/postman.png?raw=true",
    name: "Postman",
  },
  {
    img: "https://github.com/Nileshmore13/Nileshmore13.github.io/blob/master/public/npm.png?raw=true",
    name: "npm",
  },
];
export default function Skills() {
  const color = useColorModeValue("blue.300", "white");
  return (
    <Box id="skills" style={{ width: "100%" }}>
      <Box pt="70px" textAlign={"center"}>
      <Heading mt={{ base: "16", md: "0" }} color={color}>Skills</Heading>
      </Box>
      <Box
        w="98vw"
        m="auto"
        mt={{ base: "25px", sm: "auto", md: "auto" }}
        display={"flex"}
        alignItems="center"
        justifyContent={"center"}
        flexWrap="wrap"
      >
        <Box
          w={{ base: "100%", sm: "80%" }}
          m="auto"
          textAlign="center"
        >
          {DATA.map((el) => {
            return (
              <Box
                w={{ base: "30%", sm: "19%", md: "11.6%" }}
                maxH={{ base: "16vh", sm: "17vh", md: "180px" }}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                zIndex={1}
                borderRadius="20px"
                margin="2.5%"
                float="left"
                display="flex"
                flexDirection={"column"}
                justifyContent="center"
                alignItems={"center"}
                padding="20px"
                transition={"all 0.3s ease 0s"}
                marginLeft={{ base: "13%", sm: "auto", md: "auto" }}
                marginBottom={{ base: "2%", sm: "auto", md: "auto" }}
                _hover={{
                  transform: "scale(1.1)",
                  transition: "0.5s ease-in-out",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                }}
              >
                <Image
                  w="100%"
                  h="100%"
                  borderRadius={"10px"}
                  src={el.img}
                  alt=""
                />
                <Text fontWeight={700}>{el.name}</Text>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
