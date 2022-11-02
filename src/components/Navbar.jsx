import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  VStack,
  Heading,
  Text
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

const Links = [
  { name: "Home", id: "#home" },
  { name: "About", id: "#about" },
  { name: "Skills", id: "#skills" },
  { name: "Projects", id: "#projects" },
  { name: "Contact", id: "#contact" }
];

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("blue.400", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        backgroundColor={color === "white" ? "gray.700" : "gray.50"}
        px={{ base: "3", md: "8" }}
        position="sticky"
        top="0"
        zIndex={4}
        color="white"
      >
        <Flex h={{base:70,sm:70,md:16}} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={
              isOpen ? (
                <CloseIcon color={color === "white" ? "white" : "black"} />
              ) : (
                <HamburgerIcon color={color === "white" ? "white" : "black"} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <motion.div
              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 1.2
              }}
            >
              <Heading letterSpacing={3} fontFamily={"Inspiration"}>
                <AnchorLink href="#home">
                  <Button
                    letterSpacing={"2px"}
                    alignItems="center"
                    fontWeight={1000}
                    
                    fontSize="30px"
                    border={
                      color === "white" ? "5px solid White" : "5px solid black"
                    }
                    backgroundColor={"transparent"}
                    color={color === "white" ? "white" : "Black"}
                    p="20px 20px"
                  >
                    Karthik
                  </Button>
                </AnchorLink>
              </Heading>
            </motion.div>
          </HStack>
          <Flex>
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}
              fontWeight="500"
              fontSize="16px"
            >
              {Links.map((link) => (
                <AnchorLink href={link.id} key={link.name}>
                  <Text fontSize="20px" as="b" color={color}>
                    {link.name}
                  </Text>
                </AnchorLink>
              ))}
            </HStack>
            <motion.div
              initial={{
                x: 500,
                opacity: 0,
                scale: 0.5
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1
              }}
              transition={{
                duration: 1.2
              }}
            >
              <Button
                ml="20%"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                onClick={toggleColorMode}
              >
                {colorMode === "light" ? (
                  <MoonIcon fontSize="20px" color={"gray.600"} />
                ) : (
                  <SunIcon fontSize="20px" color={color} />
                )}
              </Button>
            </motion.div>
          </Flex>
        </Flex>
        {isOpen ? (
          <VStack
            justifyContent={"center"}
            flexDirection="row"
            textAlign="center"
            alignItems="center"
            h="100vh"
            display={{ md: "none" }}
            fontWeight="500"
            fontSize="16px"
          >
            <VStack spacing={14} mt="20">
              {Links.map((link) => (
                <AnchorLink href={link.id} key={link.name}>
                  <Text
                    onClick={isOpen ? onClose : onOpen}
                    as="b"
                    fontSize="20px"
                    color={color}
                  >
                    {link.name}
                  </Text>
                </AnchorLink>
              ))}
            </VStack>
          </VStack>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;


