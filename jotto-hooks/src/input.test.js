import React from 'react';
import { shallow } from 'enzyme';
import Input from './input';
import { findByTestAttr, checkProps } from '../test/testUtils';


const setup = (secretWord = 'party') => {
    return shallow(<Input secretWord={secretWord} />);
}

test("component renders without errors", () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "component-input");
    expect(component.length).toBe(1);
});


test("does not throw warning with expected props", () => {
    checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
    let mockSetCurrentGuess = jest.fn();
    let wrapper;
    beforeEach(() => {
        mockSetCurrentGuess.mockClear();
        React.useState = jest.fn(() => ["", mockSetCurrentGuess]);
        wrapper = setup();
    });

    test("state updates with value of input box upon change", () => {
        const inputBox = findByTestAttr(wrapper, "input-box");
        const mockEvent = { target: { value: "train" } };
        inputBox.simulate("change", mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
    });

    test("state updates with value of input box after when button was clicked", () => {
        const submitButton = findByTestAttr(wrapper, "submit-button");
        submitButton.simulate("click", { preventDefault() { } });
        expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
    })
});