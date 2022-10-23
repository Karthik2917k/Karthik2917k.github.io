import { Box, Flex, Grid, GridItem, Image, Link, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
  url: 'https://www.ayoa.com/wp-content/uploads/sites/5/2020/11/New_to_ayoa_banner.png',
  caption: 'Ayoa',
  description:"It's group project - Ayoa.com is an online Project, Provides a Better Way for Brainstorming, note-taking, and Project Planning. finished project in 7 days and learned lots of new things being a part of team as a member",
  languages:"HTML, CSS, JavaScript",
  github:"https://github.com/Srahul2244/grouchy-dinner-9447",
  live:"https://tiny-rugelach-e3e0ee.netlify.app/",
  video:""
  },
  {
  url: 'https://d341ezm4iqaae0.cloudfront.net/assets/sites/39/2015/12/29151128/content-img-4-en_in.png',
  caption: 'Indeed',
  description:"It's my major project - Indeed.com is an recruitment platform that provides hiring-related services to job seekers / corporates and recruiters . finished project in 6-7 days and learned lots of new things.",
  languages:"React, Chakra-UI",
  github:"https://github.com/Karthik2917k/hurried-hospital-4011",
  live:"https://karthik-lime.vercel.app/",
  video:""
  },
  {
  url: 'https://th.bing.com/th/id/OIP.lMxWj-FtAuJbjT9IndUNVgHaEv?pid=ImgDet&rs=1',
  caption: 'Asos',
  description:"It's an individual project - Asos.com is an online shopping site for men clothing. try to implement all the features of an e-commerce website. finished project in 5 days.",
  languages:"HTML, CSS, JavaScript",
  github:"https://github.com/Karthik2917k/new-bucket-3441",
  live:"https://new-bucket-3441.vercel.app/",
  video:""
  },
];
function Projects() {
  const color = useColorModeValue("blue.300", "white");
  return (
    <section  id="projects" >
       <Box pt="80px" m="50px 0px" textAlign={"center"}><Text fontSize={"6xl"} as="b" color={color}>
          Projects
        </Text></Box>
      <Box m="auto" margin={{base:"auto auto",sm:"auto auto",md:"auto 10%"}} mt="50px">
      <div className="slide-container" >
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div style={{textAlign:"center"}} className="image-container">
            <Grid backgroundColor={"blue.50"} w={"90%"} h={"80vh"}templateColumns={{base:"100%",sm:"100%",md:"50% 50%"}} alignItems="center" m="auto"  borderRadius="20px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
              <GridItem m="auto 10px" placeItems={"center"} >
              <Link target={"_blank"} href={fadeImage.live} alt={fadeImage.caption}><Image w={{base:"400px",sm:"400px",md:"500px"}} src={fadeImage.url} alt={fadeImage.caption}/></Link>
              </GridItem>
              <GridItem w="90%" m="auto">
                <Text fontSize={"4xl"} color="black" as="b">{`${fadeImage.caption}.com`}</Text><br/><br/>
                <Text  fontWeight={500} fontSize="18px" color="gray.500">{fadeImage.description}</Text><br/>
                <Text as="b" fontSize="20px" color="black">Tech Stacks: <span style={{color:"gray",fontSize:"18px"}}>{fadeImage.languages}</span></Text><br/><br/>
                <Flex justifyContent={"center"} alignItems={"center"}>
                    <Link target={"_blank"} href={fadeImage.live}><Image pl="10px" src="https://i.ibb.co/vsw8tWb/website.png" alt={""}></Image></Link>
                    <Link target={"_blank"} href={fadeImage.video}><Image pl="10px" src="https://i.ibb.co/3WnfsMF/video.png" alt={""}></Image></Link>
                    <Link target={"_blank"} href={fadeImage.github}><Image pl="10px" src="https://i.ibb.co/ZLskdcS/githube.png" alt={""}></Image></Link>
                </Flex>
          
              </GridItem>
            </Grid>
            
            </div>
            
          </div>
        ))}
      </Fade>
    </div>
    </Box>
    </section>
  )
}

export default Projects;