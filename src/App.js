import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { DataTable } from './components/Table/DataTable';
import { DataChart } from './components/Chart/DataChart';
import 'bulma/css/bulma.min.css';


function App() {
  return (
    <div className="App">
      <nav className="navbar is-black is-fixed-bottom">
        <Link to="/">Home</Link>
        <Link to="/table">Player Table</Link>
        <Link to="/charts">Player Charts</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <h1 className="title is-1">Annual East/West Bowl</h1>
        </Route>
        <Route path="/table">
          <h1 className="title is-1">Player Table</h1>
          <DataTable className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"/>
        </Route>
        <Route path="/charts">
          <h1 className="title is-1">Player Chart</h1>
          <DataChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
