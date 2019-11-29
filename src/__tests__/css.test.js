import React from 'react';
import { cy } from '@itsjonq/cyan';
import { css, View } from '../index';
import { space, layout, typography, color } from 'styled-system';

describe('css', () => {
	test('should render string styles', () => {
		cy.render(
			<View
				css={css`
					background: red;
				`}
			/>,
		);

		const el = cy.get('div');

		expect(el.style().background).toBe('red');
	});

	test('should render function styles', () => {
		const bg = ({ bg }) => `background: ${bg};`;

		cy.render(
			<View
				bg="red"
				css={css`
					${bg};
				`}
			/>,
		);

		const el = cy.get('div');

		expect(el.style().background).toBe('red');
	});

	test('should render string + function styles', () => {
		const bg = ({ bg }) => `background: ${bg};`;

		cy.render(
			<View
				bg="red"
				css={css`
					${bg};
					padding: 20px;
				`}
				margin="10px"
			/>,
		);

		const el = cy.get('div');

		expect(el.style().background).toBe('red');
		expect(el.style().padding).toBe('20px');
		expect(el.style().margin).toBe('10px');
	});

	test('should handle mixins from 3rd party libraries', () => {
		cy.render(
			<View
				bg="red"
				css={css`
					${space};
					${layout};
					${typography};
					${color};
				`}
				p={4}
				m={2}
			/>,
		);

		const el = cy.get('div');

		expect(el.style().background).toBe('red');
		expect(el.style().padding).toBe('32px');
		expect(el.style().margin).toBe('8px');
	});
});
