import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Skills() {
  const color = useColorModeValue("blue.300", "white");
  return (
    <Box id="skills" style={{ width: "100%" }}>
      <Box pt="50px" textAlign={"center"}>
        <Text fontSize={"6xl"} as="b" color={color}>
          Skills
        </Text>
      </Box>
      <Box w="80%" m="auto">
        <Grid
          templateColumns={{ base: "100%", sm: "100%", md: "50% 50%" }}
          gap={30}
        >
          <GridItem>
            <Box mt="25px">
              <Text as="b" fontSize={{ base: "20px", sm: "20px", md: "30px" }}>
                Front-End Technologies :
              </Text>
              <Grid
                w="100%"
                mt="25px"
                templateColumns={{
                  base: "50% 50%",
                  sm: "50% 50%",
                  md: "20% 20% 20% 20%",
                  lg: "25% 25% 25% 25%",
                }}
                alignItems={"center"}
                gap={{ base: 5, sm: 5, md: 2 }}
              >
                <GridItem>
                  <Image
                    ml="30px"
                    w="80px"
                    h="80px"
                    src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/html.png?raw=true"
                    alt="html"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    ml="30px"
                    w="80px"
                    h="80px"
                    src="https://raw.githubusercontent.com/Karthik2917k/Karthik2917k.github.io/master/public/assets/css.png"
                    alt="css"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    ml="30px"
                    w="80px"
                    h="80px"
                    src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/javascript.png?raw=true"
                    alt="JS"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    ml="30px"
                    w="80px"
                    h="80px"
                    src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/typescript.png?raw=true"
                    alt="typescript"
                  />
                </GridItem>
              </Grid>
            </Box>
            <Box mt="30px">
              <Text as="b" fontSize={{ base: "18px", sm: "18px", md: "30px" }}>
                Front-End Frameworks & Libraries :
              </Text>
              <Grid
                w="100%"
                mt="25px"
                templateColumns={{
                  base: "50% 50%",
                  sm: "50% 50%",
                  md: "25% 25% 25% 25%",
                }}
                alignItems={"center"}
                gap={{ base: 5, sm: 5, md: 2 }}
              >
                <GridItem>
                  <Image
                    ml="30px"
                    w="80px"
                    h="80px"
                    src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/react.png?raw=true"
                    alt="React"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    ml="30px"
                    w="80px"
                    h="80px"
                    src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/redux.png?raw=true"
                    alt="Redux"
                  />
                </GridItem>
              </Grid>
            </Box>
            <Box mt="30px">
              <Text as="b" fontSize={{ base: "20px", sm: "20px", md: "30px" }}>
                Tools
              </Text>
              <Grid
                w="100%"
                mt="25px"
                templateColumns={{
                  base: "50% 50%",
                  sm: "50% 50%",
                  md: "25% 25% 25%",
                }}
                alignItems={"center"}
                gap={{ base: 5, sm: 5, md: 2 }}
              >
                <GridItem>
                  <Image
                    ml="30px"
                    w="80px"
                    h="80px"
                    src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/visual-studio-code.png?raw=true"
                    alt="VS"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    ml="30px"
                    w="80px"
                    h="80px"
                    src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/git.png?raw=true"
                    alt="Github"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    ml="30px"
                    w="80px"
                    h="80px"
                    src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/postman.png?raw=true"
                    alt="postman"
                  />
                </GridItem>
              </Grid>
            </Box>
          </GridItem>
          <GridItem>
            <Box mt="25px">
              <Text as="b" fontSize={{ base: "20px", sm: "20px", md: "30px" }}>
                Back-End Technology & Framework :
              </Text>
              <Grid
                w="100%"
                mt="25px"
                templateColumns={{
                  base: "50% 50%",
                  sm: "50% 50%",
                  md: "25% 25% 25% 25%",
                }}
                alignItems={"center"}
                gap={{ base: 5, sm: 5, md: 2 }}
              >
                <GridItem>
                  <Image
                    ml="30px"
                    w="80px"
                    h="80px"
                    src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/express.png?raw=true"
                    alt="express"
                  />
                </GridItem>
                <GridItem>
                  <Image
                    ml="30px"
                    w="80px"
                    h="80px"
                    src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/nodejs.png?raw=true"
                    alt="Node js"
                  ></Image>
                </GridItem>
              </Grid>
            </Box>
            <Box m="auto" mt="50px">
              <Text as="b" fontSize={{ base: "20px", sm: "20px", md: "30px" }}>
                Database :
              </Text>
              <Box mt="25px">
                <Image
                  ml="30px"
                  w="80px"
                  h="80px"
                  textAlign={"center"}
                  src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/mongodb.png?raw=true"
                  alt="MongoDB"
                />
              </Box>
            </Box>
            <Box mt="50px">
              <Text as="b" fontSize={{ base: "20px", sm: "20px", md: "30px" }}>
                Other Skills
              </Text>
              <Box mt="25px">
                <Image
                  ml="30px"
                  w="80px"
                  h="80px"
                  textAlign={"center"}
                  src="https://www.pngkit.com/png/full/234-2349639_data-structure-algorithms-weak-avl-tree.png"
                  alt="Data structures"
                />
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
}
