var WptDashboardApp = require('./WptDashboardApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={WptDashboardApp}>
    <Route name="/" handler={WptDashboardApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
