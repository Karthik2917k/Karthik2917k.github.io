import {
  Box,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
function Github() {
  const color = useColorModeValue("blue.300", "white");
  const calender = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 8;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
  return (
    <div>
      <Box>
        <Box mt="50px" textAlign={"center"}>
          <Text fontSize={"4xl"} as="b" color={color}>
            GITHUB STATS
          </Text>
        </Box>
        <SimpleGrid w="80%" m="auto" columns={1} spacing={5}>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
            <Box m="auto">
              <GitHubCalendar
                username="karthik2917k"
                transformData={calender}
              />
            </Box>
            <Box m="auto">
              <Image
                height={"200px"}
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=karthik2917k"
              />
            </Box>
          </SimpleGrid>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
            <Box m="auto">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=karthik2917k&show_icons=true&locale=en"
                alt="Karthik"
              />
            </Box>
            <Box m="auto">
              <Image
                src="https://github-readme-streak-stats.herokuapp.com/?user=karthik2917k&"
                alt="Karthik"
              />
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Box>
    </div>
  );
}

export default Github;
