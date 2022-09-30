import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import { DataTable } from './components/Table/DataTable';
import { Chart } from './components/Chart/Chart';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/table">Player Table</Link>
        <Link to="/charts">Player Charts</Link>
      </nav>
      <Switch>
        <Route path="/table">
          <h1>Player Table</h1>
          <DataTable />
        </Route>
        <Route path="/charts">
          <h1>Player Chart</h1>
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
