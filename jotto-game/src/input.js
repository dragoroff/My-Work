import React, { Component } from 'react';
import { connect } from 'react-redux';
import { guessWord } from './actions';

export class UnconnectedInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentGuess: null,
        }
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const guessedWord = this.state.currentGuess;

        if (guessedWord) {
            this.props.guessWord(this.state.currentGuess);
            this.setState({
                currentGuess: ""
            });
        }
    }

    render() {
        const content = this.props.success ? null : (
            <form className="form-inline">
                <input
                    data-test="input-box"
                    className="mb-2 mx-sm-3"
                    type="text"
                    placeholder="Enter guess"
                    onChange={(e) => this.setState({ currentGuess: e.target.value })}
                />
                <button
                    data-test="submit-button"
                    className="btn btn-primary"
                    type="submit"
                    onClick={this.onSubmit}
                >
                    Submit
                </button>
            </form>
        );
        return (<div data-test="component-input">{content}</div>);
    };
};

const mapStateToProps = ({ success }) => {
    return {
        success
    }
};

export default connect(mapStateToProps, { guessWord })(UnconnectedInput);