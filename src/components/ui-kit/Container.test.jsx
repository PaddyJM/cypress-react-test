import * as React from 'react'
import { mount } from '@cypress/react'
import Container from './Container'
import Button from './Button'
import Input from './Input'
import Link from './Link'

it('Button', () => {
  mount(<Container className="Test Class">
      <Button />
      <Link />
      <Input />
  </Container>)
  cy.get('div').should('have.class', 'Test Class')
  cy.get('div').should('have.class', 'ui-container')
  cy.get('div').should('not.be.disabled')
})