// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile2/components/Information";
import { useState } from 'react';

import { ref, set } from "firebase/database";

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





function writeUserData(name, contact, location) {
  const db = getDatabase();
  set(ref(db, 'events/'+name+'/'), {
    'name': name,
    'contact': contact,
    'location' : location
  });
}





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

  const [inputs, setInputs] = useState({});
    
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    writeUserData(inputs.username, inputs.number, inputs.location)
  }

    function myFunction(e){
      console.log("rrrriiiii")
      console.log(e)
      console.log(e.target)
      console.log(e.target.value)
      e.preventDefault();
    }
    

  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Got any events coming up?
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
      If you are planning on holding an event or function, notify us in the form beow an we'll take care of the rest!
      </Text>
      {/* <SimpleGrid columns='2' gap='20px'>
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
      {/* </SimpleGrid> */} 
      <form id="eventdetails" onSubmit={handleSubmit}>
            <FormLabel
              display='flex'
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              
              mb='8px'>
             Name
            </FormLabel>
            <Input
              id = 'nameid'
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='text'
              placeholder='Your name'
              mb='24px'
              fontWeight='500'
              size='lg'
              name="username"
              onChange={handleChange}
            />


            <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              
              display='flex'>
              Event
            </FormLabel>

           <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              onChange={handleChange}
              ms={{ base: "0px", md: "0px" }}
              type='text'
              placeholder='Type of event'
              mb='24px'
              fontWeight='500'
              size='lg'
              name="event" />       
              
              
              
              
              <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              
              display='flex'>
              Pax
            </FormLabel>

           <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              onChange={handleChange}
              ms={{ base: "0px", md: "0px" }}
              type='number'
              placeholder='Approx. no. of people'
              mb='24px'
              fontWeight='500'
              size='lg'
              name="people" />
              
              
              <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              
              display='flex'>
              Location
            </FormLabel>

           <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='text'
              placeholder='Location'
              mb='24px'
              name='location'
              fontWeight='500'
              onChange={handleChange}
              size='lg' />      
              

              <FormLabel
              ms='4px'
              fontSize='sm'
              fontWeight='500'
              
              display='flex'>
              Mobile no.
            </FormLabel>

           <Input
              isRequired={true}
              variant='auth'
              fontSize='sm'
              ms={{ base: "0px", md: "0px" }}
              type='number'
              placeholder='Enter mobile no.'
              mb='24px'
              name='number'
              onChange={handleChange}
              fontWeight='500'
              size='lg' />

              <Button
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='100%'
              h='50'
              mb='24px'
              type='submit'>
              Submit
            </Button>
              

                           
              
              
              
              
              </form> 
              </Card>
              );
}
