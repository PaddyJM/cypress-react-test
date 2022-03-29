import * as React from 'react'
import { mount } from '@cypress/react'
import Input from './Input'

it('Button', () => {
  mount(<Input className="Test Class" disabled={false}>Test Input</Input>)
  cy.get('input').type('text')
  cy.get('input').should('have.class', 'Test Class')
  cy.get('input').should('have.class', 'ui-textfield')
})