import { isString, isFunction } from './utils';

export function css(...args) {
	return props => {
		const [strings, ...fns] = args;
		const result = [];

		strings.forEach((string, index) => {
			result.push(string);
			const fn = fns[index];
			if (isFunction(fn)) {
				result.push(fn(props));
			}
		});

		return result.join('\n');
	};
}

export function getCompiledCss(props) {
	const { css: cssProp, ...restProps } = props;

	let compiledCss = '';

	if (isFunction(cssProp)) {
		compiledCss = cssProp(restProps);
	}
	if (isString(cssProp)) {
		compiledCss = cssProp;
	}

	return compiledCss;
}
