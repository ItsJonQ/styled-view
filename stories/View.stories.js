import React, { useRef } from 'react';
import { View } from '../src/View';

export default {
	title: 'View',
};

export const _default = () => (
	<>
		<View backgroundColor="#eee" borderRadius={8} padding={20}>
			Hello
		</View>
	</>
);

const Example = () => {
	const ref = useRef();
	console.log(ref);
	return <View ref={ref}>Hello</View>;
};

export const ref = () => <Example />;
