import { Box, Stack, VStack, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Box
        bgColor={"blackAlpha.900"}
        color={"whiteAlpha.700"}
        minH={"48"}
        px={"16"}
        py={["16", "8"]}
      >
        <Stack
          direction={["column", "row"]}
          h={"full"}
          alignItems={"center"}
          mt={"15px"}
        >
          <VStack w={"full"} alignItems={["center", "flex-start"]}>
            <Text fontWeight={"bold"}>About Us</Text>
            <Text
              fontSize={"sm"}
              letterSpacing={"widest"}
              textAlign={["center", "left"]}
            >
              We Are Providing Best Crypto Trading App In India, We Are Also
              Provide Guidance At A Very Reasonable Price, Thanks For Visiting.
            </Text>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
