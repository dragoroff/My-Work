import React from "react";
import PropTypes from 'prop-types';

function Input({ secretWord }) {
    const [currentGuess, setCurrentGuess] = React.useState("");
    return (
        <div
            data-test="component-input"
        >
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    placeholder="Enter Guess"
                    value={currentGuess}
                    onChange={e => setCurrentGuess(e.target.value)}
                    type="text" />
                <button
                    className="btn btn-primary mb-2"
                    data-test="submit-button"
                    onClick={e => {
                        e.preventDefault();
                        setCurrentGuess("");
                    }}
                >
                    Submit</button>
            </form>
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
}

export default Input;