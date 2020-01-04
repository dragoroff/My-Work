import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = props => {
    let context;
    if (props.guessedWords.length === 0) {
        context = <span data-test="guess-instructions">Try to guess words!</span>
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <tr data-test="guessed-word" key={index}>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ))
        context = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-bordered table-sm">
                    <thead className="thead-light">
                        <tr><th>Guess</th><th>Matching Letters</th></tr>
                        {guessedWordsRows}
                    </thead>
                </table>
            </div>
        )
    }
    return (
        <div data-test="component-guessed-word">
            {context}
        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        })
    ).isRequired,
}

export default GuessedWords
