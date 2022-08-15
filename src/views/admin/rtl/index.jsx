
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
import CheckTable from "views/admin/rtl/components/CheckTable";
import ComplexTable from "views/admin/rtl/components/ComplexTable";
import DailyTraffic from "views/admin/rtl/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import Tasks from "views/admin/rtl/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/rtl/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/rtl/variables/columnsData";
import tableDataCheck from "views/admin/rtl/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/rtl/variables/tableDataComplex.json";

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

        
<CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} />  

<ComplexTable
  columnsData={columnsDataComplex}
  tableData={tableDataComplex}
/>

</SimpleGrid>
</SimpleGrid>
    


      <SimpleGrid columns={{ base: 2, md: 2, xl: 1 }} gap='20px' mb='20px'>


  
        <SimpleGrid columns={{ base: 1, md: 1, xl: 3 }} gap='20px'>
        <DailyTraffic />
    
          <MiniStatistics
          startContent={
            <IconBox
              w='56px'
              h='56px'
              bg='linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)'
              icon={<Icon w='28px' h='28px' as={MdAddTask} color='white' />}
            />
          }
          name='BINS COLLECTED'
          value='4'
        />
     
        </SimpleGrid>
      </SimpleGrid>



      <SimpleGrid columns={{ base: 2, md: 2, xl: 1 }} gap='20px' mb='20px'>


  
        <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px'>

        </SimpleGrid>
      </SimpleGrid>



  
    </Box>
  );
}
