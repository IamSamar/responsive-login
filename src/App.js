
import { Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Login.jsx';
import Dashboard from './Components/Dashboard.jsx';

function App() {
  return (
    <div className="App secondary-color">
    <Switch>
      <Route path="/Home" component={Login} />
      <Route path="/dashboard" component={Dashboard}/>
    </Switch>
    </div>
  );
}

export default App;
