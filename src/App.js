import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';

function App() {
  return (
    <Router>
      <Route path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
