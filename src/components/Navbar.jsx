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
  Text,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {Link} from "react-scroll"
import { motion } from "framer-motion";

const Links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" }
];

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("blue.400", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        backgroundColor={color === "white" ? "gray.700" : "gray.100"}
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
                <Link to={"home"} spy={true} smooth={true} offset={-70} duration={1000} key={"home"}>
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
                  </Link>
              </Heading>
            </motion.div>
          </HStack>
          <Flex>
            <HStack
              as={"nav"}
              spacing={5}
              display={{ base: "none", md: "flex" }}
              fontWeight="500"
              fontSize="16px"
            >
              <Link style={{cursor:"pointer"}} to={"home"} spy={true} smooth={true} offset={-70} duration={1000} key={"home"}>
                  <Text  fontSize="20px" as="b" color={color}>
                    Home
                  </Text>
                  </Link>
              {Links.map((link) => (
                <Link style={{cursor:"pointer"}} to={link.id} spy={true} smooth={true} offset={0} duration={500} key={link.name}>
                  <Text fontSize="20px" as="b" color={color}>
                    {link.name}
                  </Text>
                </Link>
              ))}
              <a
                href="https://github.com/Karthik2917k/Karthik2917k.github.io/raw/master/public/assets/Karthik-Alakunta-Resume.pdf"
                download={"Karthik-Alakunta-Resume"}
              >
                <Text onClick={isOpen ? onClose : onOpen} fontSize="20px" as="b" color={color}>Resume</Text>
              </a>
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
            <Link style={{cursor:"pointer"}} to={"home"} spy={true} smooth={true} offset={-1100} duration={500} key={"home"} onClick={isOpen ? onClose : onOpen}>
                  <Text  fontSize="20px" as="b" color={color}>
                    Home
                  </Text>
                  </Link>
            {Links.map((link) => (
                  <Link style={{cursor:"pointer"}} to={link.id} spy={true} smooth={true} offset={-1020} duration={500} key={link.name} onClick={isOpen ? onClose : onOpen}>
                  <Text  fontSize="20px" as="b" color={color}>
                    {link.name}
                  </Text>
                  </Link>
              ))}
               <a
                href="https://github.com/Karthik2917k/Karthik2917k.github.io/raw/master/public/assets/Karthik-Alakunta-Resume.pdf"
                download={"Karthik-Alakunta-Resume"}
              >
                <Text onClick={isOpen ? onClose : onOpen} fontSize="20px" as="b" color={color}>Resume</Text>
              </a>
            </VStack>
          </VStack>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;


