import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
  heading: string;
  right?: boolean;
}

export const HowItWorksBox: React.FC<Props> = ({
  heading,
  right,
  children,
}) => {
  return (
    <Box
      w={["100%", "40%"]}
      alignSelf={right ? "flex-end" : undefined}
      textAlign={right ? "right" : "left"}
    >
      <Heading size="md" fontFamily="subheading">
        {heading}
      </Heading>
      <Text>{children}</Text>
    </Box>
  );
};
