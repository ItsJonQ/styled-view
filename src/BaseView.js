import styled from '@emotion/styled';
import { sanitizeStyleProps } from 'is-style-prop-valid';
import { is } from './utils';

const defaultProps = {
	boxSizing: 'border-box',
};

export const BaseView = styled('div')(props => {
	const mergedProps = { ...defaultProps, ...props };
	const { theme, sx, ...restProps } = mergedProps;

	// Theme support
	const themeProps = is.plainObject(theme) ? theme : {};
	// Style prop (Override)
	const styleProps = is.plainObject(sx) ? sx : {};

	return sanitizeStyleProps({
		...themeProps,
		...restProps,
		...styleProps,
	});
});

export default BaseView;
