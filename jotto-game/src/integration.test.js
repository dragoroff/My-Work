import { storeFactory } from '../test/testUtils';
import { guessWord } from './actions';
import { compose } from 'redux';

describe("guessWord action dispatcher", () => {
    const secretWord = "party";
    const unsuccessfulGuess = "train";
    describe("no guessed words before", () => {
        let store;
        const initialState = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test("updates state correctly for unsuccesful guess", () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3,
                }]
            };
            expect(newState).toEqual(expectedState);
        });
        test("updates state correctly for succesful guess", () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5,
                }],
            };
            expect(expectedState).toEqual(newState);
        });
    });
    describe("some guessed words before", () => {
        const guessedWords = [{
            guessedWord: "agile",
            letterMatchCount: 1,
        }];
        const initialState = { secretWord, guessedWords };
        let store;
        beforeEach(() => {
            store = storeFactory(initialState);
        })
        test("updates state correctly for unsuccesful guess", () => {
            store.dispatch(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [...guessedWords, { guessedWord: unsuccessfulGuess, letterMatchCount: 3 }],
            };
            expect(expectedState).toEqual(newState);
        });
        test("updates state correctly for succesful guess", () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [...guessedWords, { guessedWord: secretWord, letterMatchCount: 5 }],
            };
            expect(expectedState).toEqual(newState);
        });
    });
});