import React from "react";

// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import BarChart from "components/charts/BarChart";

// Custom components
import Card from "components/card/Card.js";
import {
  getclusterchart,
  getoptionchart,
} from "variables/charts";

// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import { ref, set } from "firebase/database";
import bins from "../../bins.json";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

import { onValue} from "firebase/database";

import { child, get } from "firebase/database";

const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://quantum-7ab4c-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
/*
const dbRef = ref(getDatabase());
function convert(obj){
  var templist = [];
  for (var i = 0; i< obj.length; i++){
    var lan = obj[i]['LATITUDE']
    var lon = obj[i]['LONGITUDE']
    var cap = 'CAPACITY: ' + String(obj[i]['CAPACITY']) +' '+ 'CLUSTER: ' + String(obj[i]['CLUSTER'])    
    templist.push({
      position: [lan, lon],
      title: cap
      //icon: redicon
    })
    
  }

  return templist
  }

*/
function convert(obj){
  var templist = [];
  for (var i = 0; i< obj.length; i++){
    var lan = obj[i]['LATITUDE']
    var lon = obj[i]['LONGITUDE']
    var cap = 'CAPACITY: ' + String(obj[i]['CAPACITY']) +' '+ 'CLUSTER: ' + String(obj[i]['CLUSTER'])    
    templist.push({
      position: [lan, lon],
      title: cap
      //icon: redicon
    })
    
  }

  return templist
  }
const db = getDatabase();

console.log(bins)
var gbinobin = bins['BINS'];
var gnewlist = convert(gbinobin)
console.log(gnewlist)
var barChartDataDailyTraffic = getclusterchart(gbinobin, 2);
console.log("234234")
var barChartOptionsDailyTraffic2 = getoptionchart(gbinobin, 2)
//console.log(barChartDataDailyTraffic)
/*onValue(ref(db, 'BINS/'), (snapshot) => {
     //console.log(snapshot.val());
     gbinobin = snapshot.val()
     //fs.writeFile("../../bins.json", binobin, 'utf8');
     gnewlist = convert(gbinobin)
     barChartDataDailyTraffic = getclusterchart(gnewlist, 1)
     console.log(gnewlist)
     console.log(barChartDataDailyTraffic.data)
  // ...
}, {
  onlyOnce: true
});

*/


export default function DailyTraffic(props) {
  const { ...rest } = props;

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align='center' direction='column' w='100%' {...rest}>
      <Flex justify='space-between' align='start' px='10px' pt='5px'>
        <Flex flexDirection='column' align='start' me='20px'>
          <Flex w='100%'>
            <Text
              me='auto'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
              Garbage Cluster
            </Text>
          </Flex>
          <Flex align='end'>
            <Text
              color={textColor}
              fontSize='34px'
              fontWeight='700'
              lineHeight='100%'>

            </Text>
            <Text
              ms='6px'
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'>
   
            </Text>
          </Flex>
        </Flex>
        <Flex align='center'>
          <Icon as={RiArrowUpSFill} color='green.500' />
          <Text color='green.500' fontSize='sm' fontWeight='700'>
    
          </Text>
        </Flex>
      </Flex>
      <Box h='240px' mt='auto'>
        <BarChart
          chartData={barChartDataDailyTraffic}
          chartOptions={barChartOptionsDailyTraffic2}
        />
      </Box>
    </Card>
  );
}
