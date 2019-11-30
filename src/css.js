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
	const { __css, css: cssProp, ...restProps } = props;

	let compiledCss = { css: [], sx: {} };

	if (isFunction(__css)) {
		const __nextCss = __css(restProps);
		compiledCss.css = compiledCss.css.concat(__nextCss.css);
		compiledCss.sx = { ...compiledCss.sx, ...__nextCss.sx };
	}
	if (isString(__css)) {
		compiledCss.css.push(__css);
	}

	if (isFunction(cssProp)) {
		const nextCss = cssProp(restProps);
		compiledCss.css = compiledCss.css.concat(nextCss.css);
		compiledCss.sx = { ...compiledCss.sx, ...nextCss.sx };
	}
	if (isString(cssProp)) {
		compiledCss.css.push(cssProp);
	}

	compiledCss.css = compiledCss.css.filter(isString).join(';');

	return compiledCss;
}
