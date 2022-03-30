import React from "react"
import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "./Counter"

it("renders a h2, add and subtraqct button with the correct text and classnames", () => {
    render(<Counter />)
    expect(screen.getByText('Add 1').classList.contains('counter')).toBeTruthy()
    expect(screen.getByText('Subtract 1').classList.contains('counter')).toBeTruthy()
    expect(screen.getByText('0 times clicked')).toBeTruthy()
})

it("renders the correct text after the add button is clicked once", () => {
    render(<Counter />)
    const button = screen.getByText('Add 1')
    fireEvent.click(button)

    expect(screen.getByText('1 times clicked')).toBeTruthy();
})

it("renders the correct text after the add button is clicked twice and the subtract button is clicked once", () => {
    render(<Counter />)
    const subtractButton = screen.getByText('Subtract 1')
    const addButton = screen.getByText('Add 1')
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    fireEvent.click(subtractButton)

    expect(screen.getByText('1 times clicked')).toBeTruthy();
})

it("renders the correct text after the subtract button is clicked once and the count is zero", () => {
    render(<Counter />)
    const button = screen.getByText('Subtract 1')
    fireEvent.click(button)

    expect(screen.getByText('0 times clicked')).toBeTruthy();
})