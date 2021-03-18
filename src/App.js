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
import ExploreClub from './Components/ExploreClub/ExploreClub';
import { createContext, useState } from 'react';
export const MyContext = createContext([]);

function App() {
  const [club, setClub] = useState([]);
  return (
    <MyContext.Provider value={{club, setClub}}>
      <Router>
      <Route exact path="/">
        <Header />
        <Home />
      </Route>
      <Route path="/explore">
        <Header />
        <ExploreClub />
      </Route>
    </Router>
    </MyContext.Provider>
  );
}

export default App;
