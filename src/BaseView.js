import styled from '@emotion/styled';
import { sanitizeStyleProps } from 'is-style-prop-valid';

const defaultProps = {
	boxSizing: 'border-box',
};

export const BaseView = styled.div({}, props => {
	const mergedProps = { ...defaultProps, ...props };
	return sanitizeStyleProps(mergedProps);
});

export default BaseView;
