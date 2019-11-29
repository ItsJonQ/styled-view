import React from 'react';
import { space, layout, typography, color } from 'styled-system';
import { View, css } from '../src/index';

export default {
	title: 'StyledSystem',
};

export const _default = () => {
	const customMixin = props => {
		const { variant } = props;

		switch (variant) {
			case 'primary':
				return {
					background: '#05f',
					color: 'white',
				};
			default:
				return `background: #ddd;`;
		}
	};

	const Box = props => {
		return (
			<View
				css={css`
					${customMixin}
				`}
				{...props}
			/>
		);
	};

	return (
		<>
			<Box variant="primary">Hello</Box>
			<Box variant="default">Hello</Box>
		</>
	);
};

export const styledSystem = () => {
	// Add styled-system functions to your component
	const Box = props => {
		return (
			<View
				{...props}
				css={css`
					${space};
					${layout};
					${typography};
					${color};
				`}
			/>
		);
	};

	return (
		<Box p={4} bg="#ddd" borderRadius={8}>
			Hello
		</Box>
	);
};
