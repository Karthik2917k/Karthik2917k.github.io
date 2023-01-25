import { Heading, Image, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";

const Github = () => {
  const color = useColorModeValue("blue.300", "white");
  return (
    <VStack maxW="1000px" m="auto" id="projects" p="4" gap={"6"}>
      <br />
      <Heading mt={{ base: "16", md: "0" }} color={color}>GitHub Statistics</Heading>
      <Image borderRadius={20}
        src={
          "https://raw.githubusercontent.com/Karthik2917k/Karthik2917k/f76a3aaa50bb2382e85816829dcb54fc5d4daa45/profile-3d-contrib/profile-night-rainbow.svg"
        }
      />
      <GitHubCalendar username="Karthik2917k">
        <ReactTooltip delayShow={20} html />
      </GitHubCalendar>
    </VStack>
  );
};

export default Github;
