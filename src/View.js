import React from 'react';
import { ClassNames } from '@emotion/core';
import BaseView from './BaseView';
import { getCompiledCss } from './css';
import { useMixins } from './useMixins';

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
	const { css: mixinCss, props: mixinProps } = useMixins(props);

	const compiledCss = getCompiledCss(props);

	return (
		<ClassNames>
			{({ css, cx }) => {
				return (
					<BaseView
						className={cx(
							className,
							css`
								${mixinCss};
								${compiledCss};
							`,
						)}
						{...mixinProps}
						{...restProps}
					/>
				);
			}}
		</ClassNames>
	);
}

export default View;
