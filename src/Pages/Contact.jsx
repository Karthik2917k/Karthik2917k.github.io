import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
function Contact() {
  const color = useColorModeValue("blue.300", "white");
  return (
    <section id="contact">
      <Box
        pt="80px"
        w="80%"
        m="auto"
        h={{ base: "auto", sm: "auto", md: "100vh" }}
      >
        <Box textAlign={"center"}>
          <Text fontSize={"6xl"} as="b" color={color}>
            Contact
          </Text>
        </Box>
        <Grid templateColumns={{ base: "100%", sm: "100%", md: "50% 50%" }}>
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
            <GridItem
              m={{ base: "auto 20%", sm: "auto 20%", md: "30% auto auto auto" }}
            >
              <Flex mt="50px">
                <Image
                  w="50px"
                  h="50px"
                  src="https://i.ibb.co/3WDZmb7/email.png"
                  alt="Email"
                  opacity={0.6}
                />
                <Text
                  fontSize={{ base: "20px", sm: "20px", md: "40px" }}
                  fontWeight={600}
                  m="auto 20px"
                >
                  Email :
                </Text>
              </Flex>
              <Text
                pl={{ base: "auto", sm: "auto", md: "70px" }}
                fontSize={"18px"}
                fontWeight={400}
                color="grey"
              >
                Karthikalakunta21@gmail.com
              </Text>
              <Flex mt="50px">
                <Image
                  w="50px"
                  h="50px"
                  src="https://i.ibb.co/hdB12kv/call.png"
                  alt="Call"
                />
                <Text
                  fontSize={{ base: "20px", sm: "20px", md: "40px" }}
                  fontWeight={600}
                  m="auto 20px"
                >
                  Call :
                </Text>
              </Flex>
              <Text
                pl={{ base: "auto", sm: "auto", md: "70px" }}
                fontSize={"18px"}
                fontWeight={400}
                color="grey"
              >
                + 91 6305998146
              </Text>
              <Flex mt="60px">
                <Image
                  w="50px"
                  h="50px"
                  src="https://i.ibb.co/hKn2pv9/location.png"
                  alt="Location"
                />
                <Text
                  fontSize={{ base: "20px", sm: "20px", md: "40px" }}
                  fontWeight={600}
                  m="auto 20px"
                >
                  Location :
                </Text>
              </Flex>
              <Text
                pl={{ base: "0", sm: "0", md: "70px" }}
                fontSize={{ base: "16px", sm: "16px", md: "18px" }}
                fontWeight={400}
                color="grey"
              >
                Pentlavelly, Telangana
              </Text>
            </GridItem>
          </motion.div>
          <GridItem>
            <Image
              mt="60px"
              src="https://i.ibb.co/TB4zx5Z/contact-us.png"
              alt="Contact"
            />
          </GridItem>
        </Grid>
      </Box>
    </section>
  );
}

export default Contact;
