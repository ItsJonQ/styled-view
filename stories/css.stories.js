import React from 'react';
import { css, View } from '../src/index';

export default {
	title: 'css',
};

export const _default = () => {
	const styles = css`
		${({ clr }) => `color: ${clr}`};
		padding: 20px;
	`;

	return (
		<View css={styles} clr="red" transform="scale(1)">
			Hello
		</View>
	);
};
