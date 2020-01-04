import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from './input';
import { getSecretWord } from './actions';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import './App.css';

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[
          { guessedWord: "train", letterMatchCount: 3 }
        ]} />
        <Input />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, secretWord, guessedWords } = state;
  return { success, secretWord, guessedWords };
}

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
