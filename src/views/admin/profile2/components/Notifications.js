// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";
import jj1 from '../../../../assets/img/profile/jj1.jpg'

export default function Notifications(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card mb={{ base: "10px", lg: "20px" }} mt-1 align='center' bg={`url(${jj1})`}
    bgSize='cover'>
{/*  {...rest} */}
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2.5rem'
        mt='100px'
        mb='4px'>
      </Text>
    </Card>
  );
}
