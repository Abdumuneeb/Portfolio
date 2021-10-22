import './App.css';
import Home from './Pages/Home';
import {Switch,Route} from 'react-router-dom'


function App() {
  return (
    <div>  
     <Switch>
      <Route exact path="/" component={Home}/>  
    </Switch>
    </div>

  );
}

export default App;
