import React from 'react';
import { cy } from '@itsjonq/cyan';
import { View } from '../index';

describe('View', () => {
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
				css={`
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

	test.skip('should render styles using sx prop', () => {
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
});
