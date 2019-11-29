import React from 'react';
import { ClassNames } from '@emotion/core';
import BaseView from './BaseView';
import { getCompiledCss } from './css';

/**
 * UI Primitive with built-in styled CSS support.
 *
 * @param {object} props Component props.
 * @returns React.Component A React component, enhanced with generated styles.
 * @example
 * <View backgroundColor="blue" color="white">Hello</View>
 */
export function View(props) {
	const { className, css: cssProp, ...restProps } = props;

	const { css: compiledCss, sx } = getCompiledCss(props);
	console.log(sx);

	return (
		<ClassNames>
			{({ css, cx }) => {
				return (
					<BaseView
						className={cx(
							className,
							css`
								${compiledCss};
							`,
						)}
						{...sx}
						{...restProps}
					/>
				);
			}}
		</ClassNames>
	);
}

export default View;
