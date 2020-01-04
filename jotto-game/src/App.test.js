import React from 'react';
import { shallow } from 'enzyme';
import { storeFactory } from '../test/testUtils';
import App, { UnconnectedApp } from './App';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<App store={store} />).dive().dive();
    return wrapper;
}

describe('redux properties', () => {
    test('has access to `success` state', () => {
        const success = true;
        const wrapper = setup({ success });
        const expectProps = wrapper.instance().props.success;
        expect(expectProps).toBe(success);
    });
    test('has access to `secret word` state', () => {
        const secretWord = 'party';
        const wrapper = setup({ secretWord });
        const expectProps = wrapper.instance().props.secretWord;
        expect(expectProps).toBe(secretWord);
    });
    test('has access to `guessedWords` state', () => {
        const guessedWords = [{ guessedWord: 'train', letterMatchCount: 3 }];
        const wrapper = setup({ guessedWords });
        const expectProps = wrapper.instance().props.guessedWords;
        expect(expectProps).toEqual(guessedWords);
    });
    test('`getSecretWord` action creator is a function on the props', () => {
        const wrapper = setup();
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function);
    });
});

test("`getSecretWord` runs on App mount", () => {
    const getSecretWordMock = jest.fn();
    const props = {
        getSecretWord: getSecretWordMock,
        success: false,
        guessedWords: []
    }
    const wrapper = shallow(<UnconnectedApp {...props} />);
    wrapper.instance().componentDidMount();

    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
});