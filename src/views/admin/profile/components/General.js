// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        About our idea
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
      One of the major problems faced by the world is the proper disposal of waste or effective waste management system.

      The waste management hardships are catalyzed by the large number of people, limited space for waste disposal.

      Our team has designed a system which can automatically detect the distribution and monitoring of waste containers to determine their location and quantities of waste. 

      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          // title='Education'
          value='Quicker, more efficient clean-ups
'
        />
        <Information
          boxShadow={cardShadow}
          // title='Languages'
          value='Waste bins are always ready for use
'
        />
        <Information
          boxShadow={cardShadow}
          // title='Department'
          value='Shorter routes and lesser delays in pick-ups
'
        />
        <Information
          boxShadow={cardShadow}
          // title='Work History'
          value='Further advancements in technology to aid the cause
'
        />
        {/* <Information
          boxShadow={cardShadow}
          // title='Organization'
          value='Simple interface'
        />
        <Information
          boxShadow={cardShadow}
          // title='Birthday'
          value='20 July 1986'
        /> */}
      </SimpleGrid>
    </Card>
  );
}
