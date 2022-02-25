
import Drum from "./components/pages/drum/Drum";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function App() {
  return (
    <Router>
      <div className="App">
        
        <header className="App-header">
          <Switch>
            <Route exact path='/drum' component={Drum} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
