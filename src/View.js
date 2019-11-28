import React from 'react';
import { ClassNames } from '@emotion/core';
import BaseView from './BaseView';

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

	return (
		<ClassNames>
			{({ css, cx }) => (
				<BaseView
					className={cx(
						className,
						css`
							${cssProp}
						`,
					)}
					{...restProps}
				/>
			)}
		</ClassNames>
	);
}

export default View;
