import './App.css';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Tablee from './components/Tablee'
import CreateAccou from './components/CreateAccou'
// import Detail from './components/Detail';


function App() {
  return (
    <Router>
      <Switch>


        
        <Route exact path='/'>
          <Home />

        </Route>
        <Route exact path='/create_account'>
          <CreateAccou />

        </Route>
        <Route exact path='/table_section'>
          <Tablee />

        </Route>
   


      </Switch>
    </Router>
  );
}

export default App;
