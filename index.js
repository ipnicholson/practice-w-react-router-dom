import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';
import SwitchDemo from './SwitchDemo';
import Hello from './Hello';
import './style.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <Link to="/">HOME</Link>
//           <Link to="/about">ABOUT</Link>
//           <SwitchDemo />
//         </div>
//       </Router>
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {

    const s = {color: "red"};

    return (
      <Router>
        <div>
          <NavLink exact activeStyle={s} to="/">
            HOME
          </NavLink>
          <NavLink exact activeStyle={s} to="/about">
            ABOUT
          </NavLink>
          <SwitchDemo />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
