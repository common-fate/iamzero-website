import {
  GridItem,
  GridItemProps,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
interface Props extends GridItemProps {
  icon: JSX.Element;
  heading: JSX.Element | string;
  body: JSX.Element | string;
}

const FeatureBox = ({ icon, heading, body, ...rest }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <GridItem
      p={{ base: 6, md: 10 }}
      py={{ base: 6, md: 16 }}
      bg={colorMode === "dark" ? "gray.700" : "gray.50"}
      rounded="lg"
      w="100%"
      boxShadow="    box-shadow: 0px 13px 40px rgb(0 0 0 / 30%), 0px 4px 4px rgb(0 0 0 / 20%);"
      {...rest}
    >
      {icon}
      <Heading size="md" mt={4}>
        {heading}
      </Heading>
      <Text>{body}</Text>
    </GridItem>
  );
};

export default FeatureBox;
