import React from 'react';
import { mount } from '@cypress/react';
import App from '../../src/App';

it('renders "Hello World!" greeting', () => {
  mount(<App />);
  cy.get('a').contains('Hello World!');
});

it('renders count button and initial text', () => {
  mount(<App />);
  cy.contains('0 times clicked')
  cy.get('.ui-button').contains('Add 1')
})

it('renders count button and correct text after being clicked once', () => {
  mount(<App />);
  cy.contains('0 times clicked')
  cy.get('.ui-button').contains('Add 1').click()
  cy.contains('1 times clicked')
})