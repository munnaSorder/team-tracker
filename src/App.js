import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <Route path="/">
        <Header />
        <Home />
      </Route>
    </Router>
  );
}

export default App;
