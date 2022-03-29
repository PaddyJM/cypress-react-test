import * as React from 'react'
import { mount } from '@cypress/react'
import Button from './Button'

it('Button', () => {
  mount(<Button className="Test Class" disabled={false}>Test Button</Button>)
  cy.get('input').contains('Test Button').click()
  cy.get('input').should('have.class', 'Test Class')
  cy.get('input').should('have.class', 'ui-button')
  cy.get('input').should('not.be.disabled')
})