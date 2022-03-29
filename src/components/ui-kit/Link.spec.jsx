import React from "react"
import { mount } from "@cypress/react";
import Link from './Link'

it('Link', () => {
    mount(<Link className='Test Class' href='www.google.co.uk'>Test Link</Link>)
    cy.get('a:contains(Test Link)').contains('Test Link')
    cy.get('a:contains(Test Link)').should('have.attr', 'href')
})