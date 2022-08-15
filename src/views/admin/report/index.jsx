
// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
} from "react-icons/md";
import CheckTable from "views/admin/report/components/CheckTable";
import ComplexTable from "views/admin/report/components/ComplexTable";
import DailyTraffic from "views/admin/report/components/DailyTraffic";
import PieCard from "views/admin/report/components/PieCard";
import Tasks from "views/admin/report/components/Tasks";
import TotalSpent from "views/admin/report/components/TotalSpent";
import WeeklyRevenue from "views/admin/report/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/report/variables/columnsData";
import tableDataCheck from "views/admin/report/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/report/variables/tableDataComplex.json";

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "160px", xl: "100px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
        gap='20px'
        mb='20px'>
      
        

        
      </SimpleGrid>



      {/* <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px' mb='20px'>
        <TotalSpent />
        <WeeklyRevenue />
         <PieCard />
      </SimpleGrid> */}


<SimpleGrid columns={{ base: 2, md: 2, xl: 1 }} gap='20px' mb='20px'>
<SimpleGrid columns={{ base: 2, md: 2, xl: 2 }} gap='20px'>



<ComplexTable
  columnsData={columnsDataComplex}
  tableData={tableDataComplex}
/>

<WeeklyRevenue />
</SimpleGrid>
</SimpleGrid>
    


      <SimpleGrid columns={{ base: 2, md: 2, xl: 1 }} gap='20px' mb='20px'>


  
        <SimpleGrid columns={{ base: 1, md: 1, xl: 3 }} gap='20px'>
        <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='Vechile in Operation'
          value='14'
        />
                  <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='Scheduled Trips'
          value='9'
        />

          <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='Completed Trips'
          value='16'
        />
     
        </SimpleGrid>
      </SimpleGrid>
      <Tasks></Tasks>


      <SimpleGrid columns={{ base: 2, md: 2, xl: 1 }} gap='20px' mb='20px'>


  
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px'>
    
     
        </SimpleGrid>
      </SimpleGrid>

          

  
    </Box>
  );
}
