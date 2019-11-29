import React from 'react';
import { cy } from '@itsjonq/cyan';
import { View } from '../index';
import { space, layout, typography, color } from 'styled-system';

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

	test('should support mixins', () => {
		// Add styled-system functions to your component
		const Box = props => {
			return (
				<View {...props} mixins={[space, layout, typography, color]} />
			);
		};

		cy.render(
			<Box p={4} bg="blue" borderRadius={8}>
				Hello
			</Box>,
		);

		const el = cy.get('div');

		expect(el.style().background).toBe('blue');
		expect(el.style().padding).toBe('32px');
		expect(el.style().borderRadius).toBe('8px');
	});

	test('should gracefully handle incompatible mixin prop', () => {
		const Box = props => {
			return <View {...props} mixins={'padding: 20px;'} />;
		};

		cy.render(<Box background="red">Hello</Box>);

		const el = cy.get('div');

		expect(el.style().background).toBe('red');
		expect(el.style().padding).not.toBe('20px');
	});

	test('should gracefully handle incompatible mixins', () => {
		const nope = '';
		const yup = ({ p }) => {
			return {
				padding: p * 4,
			};
		};
		const Box = props => {
			return <View {...props} mixins={[nope, yup]} />;
		};

		cy.render(
			<Box background="red" p={2}>
				Hello
			</Box>,
		);

		const el = cy.get('div');

		expect(el.style().background).toBe('red');
		expect(el.style().padding).toBe('8px');
	});
});
