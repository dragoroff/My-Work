import React, { Component } from "react";
import Toolbar from './Toolbar';


export const ThemeContext = React.createContext("light");

export default class App extends Component {
  render() {
    return (
      <div>
        <ThemeContext.Provider value="red">
          <Toolbar />
        </ThemeContext.Provider>
      </div>
    );
  }
}

// function Toolbar(props) {
//   return (
//     <div>
//       <ThemeButton />
//     </div>
//   );
// }

// function ThemeButton(props) {
//   return (
//     <div>
//       <ThemeContext.Consumer>
//         {theme => <button {...props} style={{backgroundColor: theme}} />}
//       </ThemeContext.Consumer>
//     </div>
//   );
// }
