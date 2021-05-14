import { Heading, HeadingProps, useColorMode } from '@chakra-ui/react';
import React from 'react';

// Original...
// export const LIGHT_GRADIENT = 'linear(to-l, #28cabf,#b4ff00)';
// export const DARK_GRADIENT = 'linear(to-l, #007eff,#00d687)';

// https://uigradients.com/#BurningOrangehttps://uigradients.com/#BurningOrange
// export const LIGHT_GRADIENT = 'linear(to-l, #FF416C,#FF4B2B)';
// https://uigradients.com/#SinCityRed
// export const DARK_GRADIENT = 'linear(to-l, #ED213A,#93291E)';

export const LIGHT_GRADIENT = 'linear(to-l, #ff5a80, #FEB2B2)';
export const DARK_GRADIENT = 'linear(to-l, #ff5a80, #FF416C)';

const GradientHeading = (props: HeadingProps) => {
	const { colorMode } = useColorMode();

	return (
		<Heading
			size="inherit"
			fontWeight="inherit"
			bgGradient={colorMode === 'dark' ? LIGHT_GRADIENT : DARK_GRADIENT}
			bgClip="text"
			transition="all .2s ease"
			{...props}
		/>
	);
};

export default GradientHeading;
