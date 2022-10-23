import {
  Box,
  Button,
  Flex,
  IconButton,
  Spacer,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Text,
  Link,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = useColorModeValue("blue.400", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div >
      <Box
       position="fixed"
       top="0"
       zIndex={4}
        w="100%"
        h="65px"
        m="auto"
        backgroundColor={color==="white"?"gray.900":"gray.200"}
        boxShadow="rgba(0, 0, 0, 0.2) 0px 18px 50px -10px"
       
      >
        <Flex justifyContent="space-between" p="0px 20px 0px 20px">
          <Link href="https://karthik2917k.github.io">
          <Button
          
            letterSpacing={"2px"}
            alignItems="center"
            fontWeight={1000}
            fontSize="30px"
            border={
              colorMode === "dark" ? "5px solid white" : "5px solid black"
            }
            p="20px 20px"
            mt="7px"
          >
            Karthik
          </Button></Link>
          <Spacer />
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            mt="10px"
            onClick={isOpen ? onClose : onOpen}
          />

          {isOpen === true ? (
            <Box
              display="block"
              position="absolute"
              top="60px"
              right="0"
              left="0"
              height="110vh"
              p="150px 0px"
              background={"blue.900"}
              transition="0.5s"
              textAlign="center"
            >
              <AnchorLink href="#home" >
                <Text onClick={isOpen ? onClose : onOpen} p="5px 0px" as="b" fontSize="20px" color={color}>Home</Text>
                
              </AnchorLink>
              <br />
              <br />
              <AnchorLink href="#about" >
                <Text onClick={isOpen ? onClose : onOpen} p="5px 0px" as="b" fontSize="20px" color={color}>About</Text>
                
              </AnchorLink>
              <br />
              <br />
              <AnchorLink href="#skills">
              <Text onClick={isOpen ? onClose : onOpen} p="5px 0px" as="b" fontSize="20px" color={color}>Skills</Text>

                
              </AnchorLink>
              <br />
              <br />
              <AnchorLink href="#projects" >
              <Text onClick={isOpen ? onClose : onOpen} p="5px 0px" as="b" fontSize="20px" color={color}>Projects</Text>

                
              </AnchorLink>
              <br />
              <br />
              <AnchorLink href="#contact" p="5px 0px" as="b" fontSize="20px" color={color}>
                <Button border="2px solid #90CDF4" fontSize="20px" onClick={isOpen ? onClose : onOpen}>
                  Contact
                </Button>
              </AnchorLink>
            </Box>
          ) : (
            <Box
              alignItems="center"
              textAlign="center"
              display={{ base: "none", sm: "none", md: "flex" }}
            >
              <AnchorLink href="#home" >
                <Text p="5px 20px" as="b" fontSize="20px" color={color}>Home</Text>
          
              </AnchorLink>
              <AnchorLink href="#about"  >
                <Text p="5px 20px" as="b" fontSize="20px" color={color}>About</Text>
                
              </AnchorLink>
              <AnchorLink href="#skills" >
                <Text p="5px 20px" as="b" fontSize="20px" color={color}>Skills</Text>
                
              </AnchorLink>
              <AnchorLink href="#projects" >
              <Text p="5px 20px" as="b" fontSize="20px" color={color}>Projects</Text>

                
              </AnchorLink>
              <AnchorLink  href="#contact">
                <Button border="2px solid #90CDF4" fontSize="20px">
                  Contact
                </Button>
              </AnchorLink>
            </Box>
          )}
          <IconButton
            alignItems="center"
            ml="10px"
            mt="10px"
            onClick={toggleColorMode}
          >
            {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </Flex>
      </Box>
    </div>
  );
}
