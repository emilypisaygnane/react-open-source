import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { DataTable } from './components/Table/DataTable';
import { DataChart } from './components/Chart/DataChart';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/table">Player Table</Link>
        <Link to="/charts">Player Charts</Link>
      </nav>
      <Switch>
        <Route exact path="/">
          <h1>Annual East/West Bowl</h1>
        </Route>
        <Route path="/table">
          <h1>Player Table</h1>
          <DataTable />
        </Route>
        <Route path="/charts">
          <h1>Player Chart</h1>
          <DataChart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
