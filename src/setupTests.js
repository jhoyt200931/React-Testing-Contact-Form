// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';
import ContactForm from "./components/ContactForm"
import { screen, render, getByLabelText, fireEvent } from '@testing-library/react';
import { act } from "react-dom/test-utils";


test("Inputs first name", () => {
    render(<ContactForm />);
    const firstNameInput = screen.getByTestId(/firstName/i);
    const firstNameValue = "Edd";
    fireEvent.change(firstNameInput, {target: {value: firstNameValue}});
    expect(firstNameInput).toHaveValue(firstNameValue);
});

test("Inputs last name", () => {
    render(<ContactForm />);
    const lastNameInput = screen.getByTestId(/lastName/i);
    const lastNameValue = "Burke";
    fireEvent.change(lastNameInput, {target: {value: lastNameValue}});
    expect(lastNameInput).toHaveValue(lastNameValue);
});

test("Inputs email", () => {
    render(<ContactForm />);
    const emailInput = screen.getByTestId(/email/i);
    const emailValue = "boo@gmail.com";
    fireEvent.change(emailInput, {target: {value: emailValue}});
    expect(emailInput).toHaveValue(emailValue);
});

test("Inputs message", () => {
    render(<ContactForm />);
    const messageInput = screen.getByTestId(/message/i);
    const messageValue = "Hello world!";
    fireEvent.change(messageInput, {target: {value: messageValue}});
    expect(messageInput).toHaveValue(messageValue);
});

test("Clicks submit button", () => {
    const MockOnSubmit = jest.fn();
    render(<ContactForm onSubmit={MockOnSubmit}/>);
    const firstNameInput = screen.getByTestId(/firstName/i);
    const lastNameInput = screen.getByTestId(/lastName/i);
    const emailInput = screen.getByTestId(/email/i);
    const messageInput = screen.getByTestId(/message/i);
    const submit = screen.getByTestId(/submit/i);
    fireEvent.change(firstNameInput, {target: {value: "Jay"}});
    fireEvent.change(lastNameInput, {target: {value: "Garrick"}});
    fireEvent.change(emailInput, {target: {value: "speedster@speedforce.com"}});
    fireEvent.change(messageInput, {target: {value: "Gotta Go Fast!!!"}});
    await act( async()=>{
        fireEvent.click(submit);
    })
    expect(MockOnSubmit).toHaveBeenCalled();

});
