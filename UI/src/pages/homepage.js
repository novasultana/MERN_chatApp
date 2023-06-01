import React, { useEffect } from 'react'
import { Container,Box,Text } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



const Homepage = () => {

  const history=useHistory();

  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("userInfo"));

    // if(user)history.pushState("/chats");
  },[history]);


  return (
    <Container maxW="x1" centerContent>
      <Box
      d='flex'
      justifyContent='center'
      p={3}
      bg={"white"}
      w="50%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
      >
        <Text fontsize='4xl' fontFamily="work sans" color="black"><center>Lets_Talk</center></Text>
      </Box>
      <Box bg="white" w="50%" p={4} borderRadius="lg" color='black' borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab>Login</Tab>
    <Tab>Sign up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login />
    </TabPanel>
    <TabPanel>
      <Signup />
    </TabPanel>
  </TabPanels>
</Tabs>
      </Box>
    </Container>
  );
};

export default Homepage
