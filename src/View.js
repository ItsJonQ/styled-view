import React from 'react';
import { compileToClassName } from './css';
import BaseView from './BaseView';

/**
 * UI Primitive with built-in styled CSS support.
 *
 * @param {object} props Component props.
 * @returns React.Component A React component, enhanced with generated styles.
 * @example
 * <View backgroundColor="blue" color="white">Hello</View>
 */
export const View = React.forwardRef((props, ref) => {
	const { className, css: cssProp, ...restProps } = props;
	const nextClassName = compileToClassName(props);

	return <BaseView className={nextClassName} {...restProps} ref={ref} />;
});

export default View;
