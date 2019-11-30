import { css as emotionCss, cx as emotionCx } from 'emotion';
import { is } from './utils';

export { cx } from 'emotion';

export const INTERNAL_COMPILE_KEY = '__SECRET_STYLED_VIEW_TO_COMPILE__';

export function css(...args) {
	const [firstArg, ...fns] = args;

	if (!fns.length) {
		if (is.array(firstArg)) {
			return css.apply(css, firstArg);
		}
		if (is.string(firstArg)) {
			return emotionCss`${firstArg}`;
		}
		if (is.plainObject(firstArg)) {
			return emotionCss(firstArg);
		}
		return '';
	}

	return {
		args,
		[INTERNAL_COMPILE_KEY]: true,
	};
}

export function cxx(...args) {
	return props => {
		const [strings, ...fns] = args;
		const results = [];

		strings.forEach((string, index) => {
			results.push(string);
			const fn = fns[index];

			if (is.function(fn)) {
				try {
					const rx = emotionCss`
						${fn(props)};
					`;
					results.push(rx);
				} catch (err) {
					console.warn(
						'styled-view: Error when parsing css',
						'\n',
						'\n',
						err,
					);
					results.push('');
				}
			}
		});

		return emotionCss`
			${results}
		`;
	};
}

export function compileToClassName(props) {
	const { className, css } = props;
	let result = '';

	if (is.plainObject(css)) {
		if (css[INTERNAL_COMPILE_KEY]) {
			result = cxx.apply(cxx, [...css.args])(props);
		} else {
			result = emotionCss(css);
		}
	}

	if (is.array(css)) {
		result = emotionCss(css);
	}

	if (is.string(css)) {
		result = css;
	}

	return emotionCx(className, result);
}
