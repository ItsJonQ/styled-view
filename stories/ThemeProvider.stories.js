import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { View } from '../src/index';

const theme = {
	fontFamily: 'arial',
};

export default {
	title: 'ThemeProvider',
};

export const _default = () => {
	return (
		<ThemeProvider theme={theme}>
			<View>Hello</View>
		</ThemeProvider>
	);
};

export const themeOverride = () => {
	return (
		<ThemeProvider theme={theme}>
			<View fontFamily="Georgia">Hello</View>
		</ThemeProvider>
	);
};
