import { isPlainObject, isFunction, isString } from './utils';

export function useMixins(props) {
	const { mixins = [], ...restProps } = props;

	const mixinProps = {};
	const mixinCss = [];

	if (Array.isArray(mixins)) {
		const mixinStyles = mixins.map(mixin => {
			if (isFunction(mixin)) {
				return mixin(restProps);
			}
			return '';
		});

		mixinStyles.forEach(mixin => {
			if (isPlainObject(mixin)) {
				Object.assign(mixinProps, mixin);
			}
			if (isString(mixin)) {
				mixinCss.push(mixin);
			}
		});
	}

	return {
		props: mixinProps,
		css: mixinCss.join(';\n').trim(),
	};
}
