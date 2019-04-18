import React, { Component } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

const Homepage = () => (<div>Homepage</div>);
const About = () => (<div>About</div>);
const Name = ({match}) => (<div>{match.params.name}</div>);

const SwitchDemo = ({history}) => {
  return (
    <div>
      <Switch>
        <Route path="/:name" component={Name} />
        <Route path="/about" component={About} />
        <Route path="/" component={Homepage} />
      </Switch>
      <button onClick={() => {history.push('/')}}>
        Go Home
      </button>
    </div>
  )
};

export default withRouter(SwitchDemo);