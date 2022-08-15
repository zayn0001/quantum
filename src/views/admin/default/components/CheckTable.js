import {
  Flex,
  Table,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";















import Map from "mapmyindia-react";
import bins from "../../bins.json";



import { ref, set } from "firebase/database";

import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

import { onValue} from "firebase/database";

import { child, get } from "firebase/database";
//var fs = require('fs');



export default function CheckTable(props) {
  const { columnsData, tableData } = props;

  const columns = useMemo(() => columnsData, [columnsData]);
  const data = useMemo(() => tableData, [tableData]);
  //console.log(L.icon)
  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    initialState,
  } = tableInstance;
  initialState.pageSize = 11;

  const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://quantum-7ab4c-default-rtdb.asia-southeast1.firebasedatabase.app/",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  


  function update(bins, data){
    for (var i = 0;i<9;i++){
      if(data[i]['LATITUDE']){bins[i]['LATITUDE'] = data[i]['LATITUDE'];}
      if(data[i]['LONGITUDE']){bins[i]['LONGITUDE'] = data[i]['LONGITUDE']}
      if(data[i]['CAPACITY']){bins[i]['CAPACITY'] = data[i]['CAPACITY'];console.log('this was updated')}
    }
  }



  var binobin = bins['BINS'];
  var newlist = convert(binobin)
  // Initialize Realtime Database and get a reference to the service
  const database = getDatabase(app);

  const dbRef = ref(getDatabase());
get(child(dbRef, 'BINS')).then((snapshot) => {
  if (snapshot.exists()) {
    //console.log(snapshot.val());
    binobin = snapshot.val()
    //fs.writeFile("../../bins.json", binobin, 'utf8');
    newlist = convert(binobin)
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
  //const db = getDatabase();
  //const starCountRef = ref(db, 'BINS/');
  //onValue(starCountRef, (snapshot) => {
  //var datas = snapshot.val();
  //update(binobin, datas)
  //console.log("updated")
  //binobin = datas
  //console.log(binobin)
  //newlist = convert(binobin)
  //console.log(datas)
  //console.log(binobin)

  //});
  function writeUserData(lat, lon, cap) {
    const db = getDatabase();
    set(ref(db, 'bin/'), {
      'LATITUDE': lat,
      'LONGITUDE': lon,
      'CAPACITY' : cap
    });
  }

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
/*
  const greenicon = L.Icon({
    iconUrl: '../../green.png',
    iconRetinaUrl: '../../green.png',
    iconSize: [10, 10],
    popupAnchor: [12, -10]
  });
  
  const redicon = L.Icon({
    iconUrl: '../../red.png',
    iconRetinaUrl: '../../red.png',
    iconSize: [30, 30],
    popupAnchor: [-3, -15]
  });
  
  const yellowicon = L.Icon({
    iconUrl: '../../yellow.png',
    iconRetinaUrl: '../../yellow.png',
    iconSize: [10, 10],
    popupAnchor: [12, -10]
  });
  */
  
  //console.log(bins['BINS'])
  //var objbins = bins['BINS']
  //console.log(objbins)
  //console.log(binobin)

  <script>console.log("sdfsdfsdfyyyyy")</script>
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

  
  //console.log("sfkdjshfskdjfksdhfkhsdkjfh")
  //console.log(newlist)
  

 

  // function snapit(){

    
  //   writeUserData(10.0534, 76.3511, 75)
  //   console.log("sdfsdfsd")
  // }


  return (
    <Card
      direction='column'
      w='100%'
      px='20px'
      overflowX={{ sm: "scroll", lg: "hidden" }}
      >
      <Map
       className ='map'
       markers= {newlist}
       zoom = {16}
       />
      
    </Card>
  );
}
