// import React from "react";
// import { FC } from "react";
// import { CheckIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
// import { Problem } from "../../../Questions";

const Selection = () => {
  return (
    <Box
      backgroundColor="gray"
      height="660px"
      width="630px"
      borderRadius="40px"
      position="absolute"
    >
      <Text
        width="557px"
        height="101px"
        marginTop="25px"
        marginLeft="37px"
        whiteSpace="pre-wrap"
        color="white"
        fontSize="32px"
        // position="absolute"
        wordBreak="break-word"
        fontWeight="700"
        textAlign="justify"
      >
        もんだい：たろうくんがいちばんうれしくなるコトバをえらぼう！
      </Text>

      <Flex
        direction="column"
        align="center"
        textAlign="left"
        position="absolute"
      >
        <Button
          _hover={{ bg: "#00ffff" }} //カーソルを当てた時の色
          marginTop="126px"
          marginBottom="12px"
          left="12px"
          width="606px"
          height="78px"
          borderRadius="70px"
          fontSize="30px"
          backgroundColor="white"
          color="black"
          textAlign="left"
        >
          ぼくだったらはかないかなあ。
        </Button>
        <Button
          _hover={{ bg: "#00ffff" }}
          marginBottom="12px"
          left="12px"
          width="606px"
          height="78px"
          borderRadius="70px"
          fontSize="30px"
          color="black"
          backgroundColor="white"
        >
          たろうくんらしくないよ。
        </Button>
        <Button
          _hover={{ bg: "#00ffff" }}
          marginBottom="12px"
          left="12px"
          width="606px"
          height="78px"
          borderRadius="70px"
          fontSize="30px"
          color="black"
          backgroundColor="white"
        >
          にあってるね！
        </Button>
        <Box style={{ position: "relative", display: "inline-block" }}>
          <Button
            //   marginBottom="10px"
            _hover={{ bg: "#00ffff" }}
            width="606px"
            left="12px"
            height="78px"
            borderRadius="70px"
            fontSize="30px"
            color="black"
            backgroundColor="white"
          >
            やめといたほうがいいよ！
          </Button>
          {/* <IconButton
            isRound={true}
            variant="solid"
            colorScheme="teal"
            aria-label="Done"
            fontSize="20px"
            width="50px"
            height="50px"
            color="white"
            backgroundColor="black"
            style={{ position: "absolute", top: "35px", right: "20px" }}
            icon={<CheckIcon />}
          /> */}
        </Box>
      </Flex>
    </Box>
  );
};

export default Selection;
