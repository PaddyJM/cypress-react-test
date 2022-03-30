import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "./Counter"

it("renders a h2 and a button with the correct text and classnames", () => {
    render(<Counter />)
    expect(screen.getByText('Add 1').classList.contains('counter')).toBeTruthy()
    expect(screen.getByText('0 times clicked')).toBeTruthy()
})

it("renders the correct text after the button is clicked once", () => {
    render(<Counter />)
    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(screen.getByText('1 times clicked')).toBeTruthy();
})