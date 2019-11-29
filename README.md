# ✌️ Styled View

[![Build Status](https://travis-ci.org/ItsJonQ/styled-view.svg?branch=master)](https://travis-ci.org/ItsJonQ/styled-view)
[![Coverage Status](https://coveralls.io/repos/github/ItsJonQ/styled-view/badge.svg?branch=master)](https://coveralls.io/github/ItsJonQ/styled-view?branch=master)
[![Bundle size](https://badgen.net/bundlephobia/minzip/styled-view)](https://bundlephobia.com/result?p=styled-view)

> UI Primitive for React, with CSS-in-JS support

## Table of contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

-   [Installation](#installation)
-   [Usage](#usage)
    -   [The `css` prop](#the-css-prop)
    -   [Mixins](#mixins)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

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

### The `css` prop

`<View />` accepts a special `css` prop, which allows you to write styles, just like the [css prop](https://emotion.sh/docs/css-prop#string-styles) or [styled component](https://emotion.sh/docs/styled#styling-elements-and-components) from Emotion.

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

### Mixins

`<View />` can render mixins (`function`) when passed into the `mixins` (`Array`) prop. This enables integration with libraries like [Styled Systems](https://github.com/styled-system/styled-system). It also enable you to add your very own custom mixins!

```jsx
import React from 'react';
import { space, layout, typography, color } from 'styled-system';
import { View } from 'styled-view';

// Add styled-system functions to your component
function Box(props) {
	return <View {...props} mixins={[space, layout, typography, color]} />;
}

function Example() {
	return (
		<Box p={4} bg="#ddd" borderRadius={8}>
			Hello
		</Box>
	);
}
```
