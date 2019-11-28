# ✌️ styled-view

> UI Primitive for React, with CSS-in-JS support

## Installation

```
npm install styled-view
```

## Usage

The `<View>` component supports all of the default [CSSProperties](https://github.com/ItsJonQ/is-style-prop-valid/blob/master/src/CSSProperty.js#L47) as props. The styles transformed and handled by [Emotion](https://emotion.sh/docs/introduction).

```jsx
import React from 'react';
import { View } from 'styled-view';

function Example() {
	return (
		<View backgroundColor="#eee" padding={20}>
			Hello
		</View>
	);
}
```

#### The `css` prop

`<View>` accepts a special `css` prop, which allows you to write styles, just like the [css prop](https://emotion.sh/docs/css-prop#string-styles) or [styled component](https://emotion.sh/docs/styled#styling-elements-and-components) from Emotion.

```jsx
import React from 'react';
import { View } from 'styled-view';

function Example() {
	const css = `
        &:hover {
            background-color: blue;
            color: white;
        }

        @media (min-width: 768px) {
            padding: 40px;
        }
    `;

	return (
		<View backgroundColor="#eee" padding={20} css={css}>
			Hello
		</View>
	);
}
```
