import React from 'react';
import { cy } from '@itsjonq/cyan';
import { css as emotionCss } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import { View, css } from '../index';

describe('View', () => {
	describe('rendering', () => {
		test('should render a div, by default', () => {
			cy.render(<View />);

			const el = cy.get('div');

			expect(el.exists()).toBeTruthy();
		});

		test('should render as another component, using `as` prop', () => {
			cy.render(<View as="button">Hello</View>);

			const el = cy.get('button');

			expect(el.exists()).toBeTruthy();
			expect(el.text()).toBe('Hello');

			expect(cy.get('div').exists()).toBe(false);
		});
	});

	describe('styles', () => {
		test('should render styles', () => {
			cy.render(
				<View background="pink" color="white">
					Hello
				</View>,
			);

			const el = cy.get('div');

			expect(el.style().background).toBe('pink');
			expect(el.style().color).toBe('white');
		});

		test('should render styles using css prop', () => {
			cy.render(
				<View
					css={emotionCss`
						background: purple;
						color: white;
					`}
				>
					Hello
				</View>,
			);

			const el = cy.get('div');

			expect(el.style().background).toBe('purple');
			expect(el.style().color).toBe('white');
		});

		test('should render object styles using css prop', () => {
			cy.render(
				<View
					css={{
						background: 'red',
						color: 'black',
						padding: 21,
					}}
				>
					Hello
				</View>,
			);

			const el = cy.get('div');

			expect(el.style().background).toBe('red');
			expect(el.style().color).toBe('black');
			expect(el.style().padding).toBe('21px');
		});

		test('should render styles using sx prop', () => {
			cy.render(
				<View
					sx={{
						background: 'red',
						color: 'black',
						padding: 21,
					}}
				>
					Hello
				</View>,
			);

			const el = cy.get('div');

			expect(el.style().background).toBe('red');
			expect(el.style().color).toBe('black');
			expect(el.style().padding).toBe('21px');
		});

		test('should handle invalid sx prop', () => {
			cy.render(<View sx={[['zIndex', 100]]}>Hello</View>);

			const el = cy.get('div');

			expect(el.style().zIndex).not.toBe(100);
		});

		test('should handle css prop functions', () => {
			const Example = props => {
				const mixin = ({ p }) => `padding: ${p * 4}px`;
				return (
					<View
						css={css`
							${mixin}
						`}
						{...props}
					/>
				);
			};

			const customCss = css`
				background: pink;
			`;

			cy.render(<Example className={customCss} p={2} />);

			expect(cy.get('div').style().background).toBe('pink');
			expect(cy.get('div').style().padding).toBe('8px');
		});
	});

	describe('theming', () => {
		test('should enable theming', () => {
			const theme = {
				fontFamily: 'arial',
			};

			cy.render(
				<ThemeProvider theme={theme}>
					<View>Hello</View>
				</ThemeProvider>,
			);

			expect(cy.get('div').style().fontFamily).toBe('arial');
		});

		test('should recognize own themed props', () => {
			const theme = {
				fontFamily: 'arial',
			};

			cy.render(
				<ThemeProvider theme={theme}>
					<View theme={{ fontFamily: 'georgia' }}>Hello</View>
				</ThemeProvider>,
			);

			expect(cy.get('div').style().fontFamily).toBe('georgia');
		});

		test('should handle invalid theme prop', () => {
			cy.render(<View theme={['fontFamily', 'arial']}>Hello</View>);

			expect(cy.get('div').exists()).toBe(true);
		});

		test('should override theming if props are defined', () => {
			const theme = {
				fontFamily: 'arial',
			};

			cy.render(
				<ThemeProvider theme={theme}>
					<View as="h1">Title</View>
					<View fontFamily="georgia">
						Hello
						<View as="span" fontFamily="monospace">
							There
							<View as="button">Click</View>
							<ThemeProvider theme={{ fontFamily: 'serif' }}>
								<View as="h2">Subtitle</View>
							</ThemeProvider>
						</View>
					</View>
				</ThemeProvider>,
			);

			expect(cy.get('h1').style().fontFamily).toBe('arial');
			expect(cy.get('div').style().fontFamily).toBe('georgia');
			expect(cy.get('span').style().fontFamily).toBe('monospace');
			expect(cy.get('button').style().fontFamily).toBe('arial');
			expect(cy.get('h2').style().fontFamily).toBe('serif');
		});
	});
});
