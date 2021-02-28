import React from 'react';
import  { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        This is Homepage
      </Route>
      <Route exact path='/stared'>
        This is Stared Page
      </Route>
      <Route >
        This Page Not Found or 404
      </Route>
    </Switch>
  );
}

export default App;
