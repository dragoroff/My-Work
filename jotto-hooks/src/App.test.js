import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';
import hookActions from './actions/hookActions';

const mockGetSecretWord = jest.fn();

const setup = () => {
  mockGetSecretWord.mockClear();
  hookActions.getSecretWord = mockGetSecretWord;
  return mount(<App />);
}

test('renders app component without errors', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-app");
  expect(component.length).toBe(1);
});


describe('getSecretWord called', () => {
  test("getSecretWord gets called on App mount", () => {
    setup();

    // check to see if secret word was updated
    expect(mockGetSecretWord).toHaveBeenCalled();
  });

  test("secretWord does not update on App update", () => {
    const wrapper = setup();
    // we are calling useEffect when component was mounted, so we should clear the first call
    mockGetSecretWord.mockClear();

    wrapper.update();

    expect(mockGetSecretWord).not.toHaveBeenCalled();
  });
});
