import { Box, Text, IconButton } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
// import { IconUser } from "./Icon/svg";

export const TopBar = () => {
  return (
    <Box
      display="flex"
      width="1122px"
      borderRadius="40px"
      height="78px"
      backgroundColor="black"
      position="absolute"
    >
      {/* <IconButton
        aria-label="setting"
        isRound={true}
        variant="solid"
        icon={<SettingsIcon backgroundColor="black" />}
      /> */}

      <Text
        width="250px"
        color="white"
        marginLeft="36px"
        fontWeight="bold"
        marginTop="10px"
        fontSize="40px"
        fontFamily="ZOZO Gothic_005"
      >
        ZOZOSTUDY
      </Text>
      {/* <IconUser marginRight="0px" /> */}
      {/* <IconButton
        aria-label="user"
        // isRound={true}
        width="16px"
        marginTop="20px"
        marginLeft="180px"
        height="16px"
        icon={<IconUser />}
      /> */}
      <img
        src="/public/アイコン.png"
        alt="アイコン"
        width="61px"
        height="61px"
        style={{ marginLeft: "986px", marginTop: "7px", position: "absolute" }}
      />
      <ChevronDownIcon
        width="55px"
        height="55px"
        color="white"
        // backgroundColor="white"
        style={{ marginLeft: "1053px", marginTop: "7px", position: "absolute" }}
      />
      <IconButton
        isRound={true}
        // variant="solid"
        // colorScheme="teal"
        aria-label="Done"
        fontSize="60px"
        width="50px"
        height="50px"
        style={{
          marginLeft: "1053px",
          marginTop: "15px",
          position: "absolute",
        }}
        icon={<ChevronDownIcon />}
      />
      {/* <IconButton aria-label="Search database" icon={<SearchIcon />} /> */}
    </Box>
  );
};
