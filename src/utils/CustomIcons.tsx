import React from "react";
import { createIcon } from "@chakra-ui/react";

/**
 * This file can be used to add custom Icons to the project,
 * passing them in as chakra-ui Icon components
 *
 * For more details see docs here:
 * https://chakra-ui.com/docs/media-and-icons/icon#using-the-createicon-function
 *
 */
export const WindowIcon = createIcon({
  path: (
    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="4">
      <g fill="none" stroke="currentColor" stroke-miterlimit="10">
        <path
          data-cap="butt"
          data-color="color-2"
          d="M6.5 20.5h36M24.5 20.5L37.22 7.78M11.995 7.595l12.52 12.89M6.5 33.5h36M24.5 2.5v44"
        />
        <path d="M42.5 20.5a18 18 0 00-36 0v26h36z" stroke-linecap="square" />
      </g>
    </svg>
  ),
  viewBox: "0 0 48 48",
});
