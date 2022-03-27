import * as React from 'react'
import { mount } from '@cypress/react'
import Button from './Button'

it('Button', () => {
  mount(<Button className="Test Class">Test Button</Button>)
  cy.get('button').contains('Test Button').click()
  cy.get('button').should('have.class', 'Test Class')
})