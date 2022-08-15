// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets
import Project1 from "assets/img/profile/Project1.png";
import Project2 from "assets/img/profile/Project2.png";
import Project3 from "assets/img/profile/Project3.png";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Project from "views/admin/profile/components/Project";

export default function Projects(props) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='xl'
        mt='10px'
        mb='4px'>
        Our goal is to make waste management easy for you. We want you to be able to easily find out what goes where and when it gets picked up. This way, you can reduce the amount of waste your household produces and make sure that what does get thrown away isn’t something that could have been recycled instead.
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
     </Text>
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={Project1}
        // ranking='1'
        // link='#'
        title='Maximize efficiency of waste disposal by utilising a systematic disposal method
'
      />
      <Project
        boxShadow={cardShadow}
        mb='20px'
        image={Project2}
        ranking='2'
        link='#'
        title='Reduce pollution due to above cause, such as vehicular and smell pollution
'
      />
      <Project
        boxShadow={cardShadow}
        image={Project3}
        ranking='3'
        link='#'
        title='Select a quicker and time-saving route for dump trucks using geolocation software'
      />
    </Card>
  );
}
