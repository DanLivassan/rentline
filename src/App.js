import './App.css';
import AdminLayout from './layouts/Admin';
import routes from './admin.routes';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { createBrowserHistory } from 'history';
const hist = createBrowserHistory()

function App() {
  return (
    <Router history={hist}>
      <Switch>
        <Route path="/admin" render={(props) => {
          props.routes = routes
          return <AdminLayout {...props} />
        }} />
        <Redirect to="/admin/clientes" />
      </Switch>
    </Router>
  );
}

export default App;
