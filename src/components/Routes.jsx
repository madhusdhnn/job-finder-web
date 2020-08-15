import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Root from './layouts/Root';

class Routes extends Component {
   render() {
      return (
         <Switch>
            <Route exact path="/jobs/dashboard" component={Root} />
            <Redirect from="/jobs" exact to="/jobs/dashboard" />
            <Redirect from="/" exact to="/jobs/dashboard" />
            <Redirect from="*" exact to="/jobs/dashboard" />
         </Switch>
      );
   }
}

export default withRouter(Routes);
