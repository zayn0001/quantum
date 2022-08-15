// Chakra imports
import {
  Box,
  Flex,
  Text,
  Icon,
  useColorModeValue,
  Checkbox,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import Menu from "components/menu/MainMenu";
import IconBox from "components/icons/IconBox";


// Assets
import { MdCheckBox, MdDragIndicator } from "react-icons/md";
import React from "react";
import { CSVLink, CSVDownload } from "react-csv";


function sendnoti() {

  const csvData = [
    [1]

  ];
  <CSVDownload data={csvData} target="pycomm.csv" />;

  alert('Alert Sent!');
}

export default function Conversion(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "navy.700");
  const brandColor = useColorModeValue("brand.500", "brand.400");
  return (
    <Card p='20px' align='center' direction='column' w='100%' {...rest}>
      <Flex alignItems='center' w='100%' mb='30px'>
       

        <Text color={textColor} fontSize='lg' fontWeight='700'>
          Alert Notification (to municipal/village officer)
        </Text>
        <Menu ms='auto' />
      </Flex>
      <Box px='11px'>
        <Flex mb='20px'>
          <Checkbox me='16px' colorScheme='brandScheme' />
 

          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
            North Kalamassery
          </Text>
          <Icon
            ms='auto'
            as={MdDragIndicator}
            color='secondaryGray.600'
            w='24px'
            h='24px'
          />
        </Flex>
        <Flex mb='20px'>
          <Checkbox me='16px' defaultChecked colorScheme='brandScheme' />
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
            South Kalamassery
          </Text>
          <Icon
            ms='auto'
            as={MdDragIndicator}
            color='secondaryGray.600'
            w='24px'
            h='24px'
          />
        </Flex>
        <Flex mb='20px'>
          <Checkbox defaultChecked me='16px' colorScheme='brandScheme' />
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
            Kakkanad
          </Text>
          <Icon
            ms='auto'
            as={MdDragIndicator}
            color='secondaryGray.600'
            w='24px'
            h='24px'
          />
        </Flex>
        <Flex mb='20px'>
          <Checkbox me='16px' colorScheme='brandScheme' />
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
            Vyttila
          </Text>
          <Icon
            ms='auto'
            as={MdDragIndicator}
            color='secondaryGray.600'
            w='24px'
            h='24px'
          />
        </Flex>
        <Flex mb='20px'>
          <Checkbox defaultChecked me='16px' colorScheme='brandScheme' />
          <Text
            fontWeight='bold'
            color={textColor}
            fontSize='md'
            textAlign='start'>
            Epadaplly
          </Text>
          <Icon
            ms='auto'
            as={MdDragIndicator}
            color='secondaryGray.600'
            w='24px'
            h='24px'
          />

        </Flex>
        <Flex mb='20px'>
        <button onClick={sendnoti} className="css-1c49n9p" style={{display:'grid'}}>SEND</button>
        </Flex>


      </Box>
    </Card>
  );
}
