import React from "react";
import {
  Container,
  Box,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Grid,
  useColorModeValue,
  Heading,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn, MdOutlineEmail } from "react-icons/md";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";


function Contact({ colorMode }) {
  const color = useColorModeValue("blue.300", "white");
  return (
    <Box id="contact" pt="50px">
      <Box textAlign={"center"} w="80%" m="auto">
      <Heading mt={{ base: "16", md: "0" }} color={color}>Contact</Heading>
      </Box>
      <Container
        maxW="full"
        mt={"5px"}
        centerContent
        overflow="hidden"
        position="relative"
      >
        <Box
          position={"absolute"}
          opacity={colorMode === "light" ? ".7" : ".1"}
          w="500px"
          left="30%"
          top="0"
          color={colorMode === "light" ? "blackAlpha.100" : "#F7AB0A"}
          display={{ base: "none", md: "flex" }}
        ></Box>
        <Grid
          gridTemplateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
          w={{ base: "full", lg: "60%" }}
          gap="3"
          m="auto"
        >
          <motion.div
            initial={{
              x: -100,
              opacity: 0,
              scale: 0.5,
            }}
            // whileInView={{ rotate: 360, scale: 1 }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Box>
              <Box>
                <br />
                <Text
                  as="i"
                  ml={{ sm: "100px", md: "auto" }}
                  mt={{ sm: 3, md: 3, lg: 10 }}
                  color="gray.600"
                >
                  Fill up the form below to contact
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems="flex-start">
                    <Button
                      size="md"
                      height="48px"
                      width="fit-content"
                      variant="ghost"
                      color={color}
                      _hover={{ border: "1px solid #4299E1" }}
                      leftIcon={<MdPhone size="20px" />}
                      letterSpacing={"1px"}
                    >
                      +91-6305998146
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="fit-content"
                      variant="ghost"
                      color={color}
                      _hover={{ border: "1px solid #4299E1" }}
                      leftIcon={<MdEmail color={color} size="20px" />}
                      letterSpacing={"1px"}
                    >
                      karthikalakunta21@gmail.com
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="fit-content"
                      variant="ghost"
                      color={color}
                      letterSpacing={"1px"}
                      _hover={{ border: "1px solid #4299E1" }}
                      leftIcon={<MdLocationOn color={color} size="20px" />}
                    >
                      Hyderabad, Telangana
                    </Button>
                  </VStack>
                </Box>
                <HStack
                  // mt={{ lg: 5, md: 3 }}
                  spacing={3}
                  px={5}
                  // border="2px solid black"
                  alignItems="flex-start"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 60,
                    }}
                  >
                    <a
                      target={"_blank"}
                      href="https://www.linkedin.com/in/karthikalakunta" rel="noreferrer"
                    >
                      <IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#4299E1", color: "white" }}
                        icon={<FaLinkedinIn size="28px" />}
                      />
                    </a>
                    <a target={"_blank"} href="https://github.com/karthik2917k" rel="noreferrer">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: "#4299E1", color: "white" }}
                        icon={<BsGithub size="28px" />}
                      />
                    </a>
                  </motion.div>
                </HStack>
              </Box>
            </Box>
          </motion.div>
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
              scale: 0.5,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <Box>
              <Box borderRadius="lg">
                <Box m={8}>
                  <form
                    action="https://getform.io/f/1eda26f5-a507-4c55-a692-83e762bfe555"
                    method="POST"
                  >
                    <VStack spacing={5}>
                      <FormControl>
                        <FormLabel as="i">Your Name</FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input
                            _focus={{ outline: "none" }}
                            border={"none"}
                            outline="none"
                            type="text"
                            size="md"
                            name="name"
                            borderBottom={"1px solid gray"}
                            required
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel as="i">Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            name="email"
                            _focus={{ outline: "none" }}
                            border={"none"}
                            borderBottom={"1px solid gray"}
                            required
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel as="i">Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="message"
                          resize="none"
                          _focus={{ outline: "none" }}
                          border={"none"}
                          outline="none"
                          type="text"
                          name="feeddback"
                          size="md"
                          borderBottom={"1px solid gray"}
                          required
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          type="submit"
                          variant="solid"
                          borderRadius={"20px"}
                          backgroundColor={"#4299E1"}
                          color={"#fff"}
                          _hover={{ borderRadius: "20px",color:"#EDF2F7" }}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </form>
                </Box>
              </Box>
            </Box>
          </motion.div>
        </Grid>
      </Container>
    </Box>
  );
}

export default Contact;
