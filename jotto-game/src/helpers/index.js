import GuessedWords from "../GuessedWords";

/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed Word
 * @param {string} secretWord - Secret Word
 * @returns {number} - Number of letters matched between Guessed Word and Secret Word 
 */
export function getLetterMatchCount(guessedWord, secretWord) {
    const secretWordSet = new Set(secretWord);
    const guessedWordSet = new Set(guessedWord);
    return [...guessedWordSet].filter(letter => secretWordSet.has(letter)).length;
};