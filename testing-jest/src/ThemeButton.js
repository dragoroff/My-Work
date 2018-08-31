import React from "react";
import {ThemeContext} from './App';

const ThemeButton = (props) => {
  return (
    <div>
      <ThemeContext.Consumer>
        {theme => <button style={{ backgroundColor: theme }} />}
      </ThemeContext.Consumer>
    </div>
  );
};

export default ThemeButton;
