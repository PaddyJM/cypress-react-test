import React from 'react';
import { mount } from '@cypress/react';
import App from '../../src/App';

it('renders "Hello World!" greeting', () => {
  mount(<App />);
  cy.get('a').contains('Hello World!');
});

it('renders test button', () => {
  mount(<App />);
  cy.get('Button').contains('Test Button')
})
