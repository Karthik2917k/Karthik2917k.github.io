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
  Image,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Links = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
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
        <Flex
          h={{ base: 70, sm: 70, md: 16 }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
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
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
              }}
            >
              <Heading letterSpacing={3} fontFamily={"Inspiration"}>
                <Link
                  to={"home"}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  key={"home"}
                >
                  <Button
                    ml="10px"
                    w="100px"
                    h="40px"
                    background={"none"}
                    _hover={{ background: "none" }}
                  >
                    {color === "white" ? (
                      <Image
                        cursor={"pointer"}
                        w={{ sm: "100%", md: "160%" }}
                        src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/karthik-low-resolution-logo-color-on-transparent-background.png?raw=true"
                        alt="logo"
                      />
                    ) : (
                      <Image
                        cursor={"pointer"}
                        w={{ sm: "100%", md: "160%" }}
                        src="https://github.com/Karthik2917k/Karthik2917k.github.io/blob/master/public/assets/karthik-low-resolution-logo-black-on-transparent-background.png?raw=true"
                        alt="logo"
                      />
                    )}
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
              <Link
                style={{ cursor: "pointer" }}
                to={"home"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                key={"home"}
              >
                <Text _hover={{color:color === "white"?"lightgrey":"lightblue"}} transition="0.5s ease-in-out" fontSize="20px" as="b" color={color}>
                  Home
                </Text>
              </Link>
              {Links.map((link) => (
                <Link
                  style={{ cursor: "pointer" }}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  key={link.name}
                >
                  <Text _hover={{color:color === "white"?"lightgrey":"lightblue"}} fontSize="20px" as="b" color={color}>
                    {link.name}
                  </Text>
                </Link>
              ))}
              <Box
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1T91PahLaInuTS6za3OwvctY__6ZZ1W9h/view?usp=sharing",
                    "_blank"
                  );
                }}
              >
                <a
                  href="https://github.com/Karthik2917k/Karthik2917k.github.io/raw/master/public/assets/Karthik-Alakunta-Resume.pdf"
                  download={"Karthik-Alakunta-Resume"}
                >
                  <Button
                    fontSize="20px"
                    as="b"
                    w="100px"
                    background={color}
                    _hover={{background:color==="white"?"#4A5568":"#dcecf7",color:color==="white"?"white":"blue.400",border:color==="white"?"3px solid #fff":"3px solid #4299E1"}}
                    color={color==="white"?"blue.400":"while"}
                  >
                     Resume
                  </Button>
                </a>
              </Box>
               
            </HStack>
            <motion.div
              initial={{
                x: 500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
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
              <Link
                style={{ cursor: "pointer" }}
                to={"home"}
                spy={true}
                smooth={true}
                offset={-1100}
                duration={500}
                key={"home"}
                onClick={isOpen ? onClose : onOpen}
              >
                <Text _hover={{color:color === "white"?"lightgrey":"lightblue"}} fontSize="20px" as="b" color={color}>
                  Home
                </Text>
              </Link>
              {Links.map((link) => (
                <Link
                  style={{ cursor: "pointer" }}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-1020}
                  duration={500}
                  key={link.name}
                  _hover={{color:color === "white"?"lightgrey":"lightblue"}}
                  onClick={isOpen ? onClose : onOpen}
                >
                  <Text fontSize="20px" as="b" color={color}>
                    {link.name}
                  </Text>
                </Link>
              ))}
                <Box
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1T91PahLaInuTS6za3OwvctY__6ZZ1W9h/view?usp=sharing",
                    "_blank"
                  );
                }}
              >
                <a
                  href="https://github.com/Karthik2917k/Karthik2917k.github.io/raw/master/public/assets/Karthik-Alakunta-Resume.pdf"
                  download={"Karthik-Alakunta-Resume"}
                >
                  <Button
                    fontSize="20px"
                    as="b"
                    w="100px"
                    background={color}
                    _hover={{background:color==="white"?"#4A5568":"#dcecf7",color:color==="white"?"white":"blue.400",border:color==="white"?"3px solid #fff":"3px solid #4299E1"}}
                    color={color==="white"?"blue.400":"while"}
                  >
                     Resume
                  </Button>
                </a>
              </Box>
            </VStack>
          </VStack>
        ) : null}
      </Box>
    </>
  );
}
export default Navbar;
