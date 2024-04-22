import { TopBar } from "../components/Questions/Topbar";
import Selection from "../components/Questions/Selection";
import { Box, Flex } from "@chakra-ui/react";
import { FC } from "react";

// import React from "react";
export type Problem = {
  quiz: "string";
  anwser: boolean;
}[];

const Questions: FC = () => {
  return (
    <>
      <Box width="100%" height="100%" position="relative" background="white">
        <Box marginLeft="36px" width="1122px">
          <TopBar />
        </Box>
        <Flex>
          {/* <img
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            // width: "100%",
            // height: "100%",
          }}
          width="350px"
          height="750px"
          src="/public/キャラデザ.png"
        /> */}
          <img
            style={{
              width: 1194,
              height: 930,
              left: 0,
              top: -40,
              position: "absolute",
              // zIndex: "-1",
            }}
            src="/public/背景_問題画面.png"
          />
          <img
            style={{
              width: 275,
              height: 588,
              left: 130,
              top: 234,
              position: "absolute",
            }}
            src="/public/キャラデザ.png"
          />
          <Box
            top="138px"
            style={{
              // width: 576,
              // height: 234,
              left: 528,
              // top: 180,
              position: "absolute",
            }}
          >
            <Selection />
          </Box>
          {/* <Explain /> */}
        </Flex>
      </Box>
    </>
  );
};

export default Questions;
