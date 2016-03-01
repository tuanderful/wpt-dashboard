const WptDashboardApp = require('./WptDashboardApp');
const React = require('react');
const ReactDOM = require('react-dom');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
// const Link = require('react-router').Link;
const browserHistory = require('react-router').browserHistory;

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={WptDashboardApp} />
  </Router>
), document.getElementById('content'));
