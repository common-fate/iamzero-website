import { Center, GridItem, Tooltip } from "@chakra-ui/react";
import React from "react";

interface Props {
  tooltip?: string;
  notYetSupported?: boolean;
}

export const SupportedProviderBox: React.FC<Props> = ({
  children,
  tooltip,
  notYetSupported,
}) => {
  return (
    <GridItem
      p={3}
      bg="white"
      height="80px"
      width="80px"
      alignItems="center"
      display="flex"
      justifyContent="center"
    >
      {tooltip ? (
        <Tooltip label={tooltip} aria-label={tooltip}>
          <Center opacity={notYetSupported ? 0.2 : 1}>{children}</Center>
        </Tooltip>
      ) : (
        <>{children}</>
      )}
    </GridItem>
  );
};
