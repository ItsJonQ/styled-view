import React from 'react';
import { cy } from '@itsjonq/cyan';
import { View } from '../index';

describe('View', () => {
	// let warnSpy = jest.fn();

	// beforeAll(() => {
	// 	console.warn = warnSpy;
	// });

	// afterAll(() => {
	// 	warnSpy.mockRestore();
	// });

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
			<View background="blue" color="white">
				Hello
			</View>,
		);

		const el = cy.get('div');

		expect(el.style().background).toBe('blue');
		expect(el.style().color).toBe('white');
	});

	test('should render styles using css prop', () => {
		cy.render(
			<View
				css={`
					background: blue;
					color: white;
				`}
			>
				Hello
			</View>,
		);

		const el = cy.get('div');

		expect(el.style().background).toBe('blue');
		expect(el.style().color).toBe('white');
	});
});
