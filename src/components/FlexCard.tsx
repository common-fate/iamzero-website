import React from 'react';
import { Flex, useColorMode, FlexProps, Box } from '@chakra-ui/react';

interface FlexCardProps extends FlexProps {
	actionButton?: JSX.Element;
}

const FlexCard = ({ actionButton, children, ...rest }: FlexCardProps) => {
	const { colorMode } = useColorMode();

	return (
		<Flex
			p={3}
			rounded="lg"
			bg={colorMode === 'dark' ? 'gray.900' : 'gray.100'}
			color={colorMode === 'dark' ? 'gray.100' : 'gray.900'}
			position="relative"
			{...rest}
		>
			<Box position="absolute" top="3px" right="3px">
				{actionButton}
			</Box>
			{children}
		</Flex>
	);
};

export default FlexCard;
