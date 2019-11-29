import { isString, isPlainObject, isFunction } from './utils';

export function css(...args) {
	return props => {
		const [strings, ...fns] = args;
		const output = { css: [], sx: {} };

		strings.forEach((string, index) => {
			output.css.push(string);
			const fn = fns[index];
			if (isFunction(fn)) {
				const rendered = fn(props);
				if (isPlainObject(rendered)) {
					output.sx = { ...output.sx, ...rendered };
				}
				if (isString(rendered)) {
					output.css.push(rendered);
				}
			}
		});

		return output;
	};
}

export function getCompiledCss(props) {
	const { css: cssProp, ...restProps } = props;

	let compiledCss = { css: [], sx: {} };

	if (isFunction(cssProp)) {
		compiledCss = cssProp(restProps);
	}
	if (isString(cssProp)) {
		compiledCss.css.push(cssProp);
	}

	return compiledCss;
}
