import React from "react";
import { Box,Flex,Grid,Link,Image,Text, GridItem } from "@chakra-ui/react";
function Footer() {
  return (
    <div>
      <Box textAlign={"center"} w="100%" h={{base:"auto" ,sm:"auto",md:"70px"}} backgroundColor={"gray.500"}p="20px">
      
       <Grid templateColumns={{base:"100%",sm:"100%",md:"30% 33% 30%"}} gap={5}  >
       <GridItem ml={{base:"40%" ,sm:"40%"}} >
       <Flex justifyContent={{base:"auto" ,sm:"auto",md:"left"}}>
            <Link target={"_blank"} href="https://github.com/Karthik2917k">
              <Image
                w="30px"
                h="30px"
                src="https://i.ibb.co/ZLskdcS/githube.png"
                alt="Github"
              />
            </Link>
            <Link
              target={"_blank"}
              href="https://www.linkedin.com/in/karthikalakunta/"
            >
              <Image
                w="30px"
                h="30px"
                ml="30px"
                src="https://i.ibb.co/kyyyvt3/linkedin.png"
                alt="Linkedin"
              />
            </Link>
          </Flex>
       </GridItem>
       <GridItem m="auto" >
       <Text p="20px 0px 20px 30px" color={"#FEFEFE"} as="b">
          Created By <span style={{color:"#1A365D",fontWeight:"bold"}}>Karthik Alakunta</span> | © 2022 All rights reserved
        </Text>
       </GridItem>
       <GridItem ml={{base:"40%" ,sm:"40%"}}>
       <Flex justifyContent={{base:"auto" ,sm:"auto",md:"right"}}>
            <Link target={"_blank"} href="https://www.instagram.com/nature_lover_mr.karthik/">
              <Image
                w="30px"
                h="30px"
                src="https://cdn-icons-png.flaticon.com/512/1384/1384031.png"
                alt="Instagram"
              />
            </Link>
            <Link
              target={"_blank"}
              href="https://twitter.com/karthik_akt"
            >
              <Image
                w="30px"
                h="30px"
                ml="30px"
                src="https://cdn-icons-png.flaticon.com/512/4138/4138168.png"
                alt="Twitter"
              />
            </Link>
          </Flex>
       </GridItem>
       </Grid>
      </Box>
    </div>
  );
}

export default Footer;
