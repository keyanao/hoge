// import { useState } from 'react'
// import reactLogo from './pages/react.svg'
// import viteLogo from '/vite.svg'
// import styles from './../public/Font.module.css'
import "./App.css";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100vw"
      height="100vh"
      backgroundColor="#092867"
    >
      <Box>
        <Heading marginTop="200px" fontSize="100px" color="white">
          ZOZOSTUDY
        </Heading>
        <Flex direction="column">
          <Button
            marginLeft="auto"
            marginRight="auto"
            marginBottom="50px"
            width="450px"
            height="85px"
            borderRadius="70px"
            fontSize="30px"
            fontWeight="bold"
            onClick={() => navigate("Mypage")}
          >
            スタート
          </Button>
          {/* <Button
            margin="auto"
            width="450px"
            height="85px"
            borderRadius="70px"
            fontSize="30px"
            fontWeight="bold"
          >
            はじめての方
          </Button> */}
        </Flex>
      </Box>
    </Box>
  );
};

export default App;
