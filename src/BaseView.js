import styled from '@emotion/styled';
import { sanitizeStyleProps } from 'is-style-prop-valid';
import { isPlainObject } from './utils';

const defaultProps = {
	boxSizing: 'border-box',
};

export const BaseView = styled('div')(props => {
	const mergedProps = { ...defaultProps, ...props };
	const { sx, ...restProps } = mergedProps;

	const stylePropsObject = isPlainObject(sx) ? sx : {};
	const styleProps = { ...restProps, ...stylePropsObject };

	return sanitizeStyleProps(styleProps);
});

export default BaseView;
