import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import Azurelogin from './components/Azurelogin';
import StaffParticularForm from './components/StaffParticularForm';
import Userlogin from './components/Userlogin';

function App() {
  return (
    <div className='App'>
      {/*<Userlogin />*/}

     <Router>

        <div className ="container">
          <Switch>
            <Route  path ="/" exact component ={Userlogin}></Route>
            <Route  path ="/azure"exact component ={Azurelogin}></Route>
            <Route  path ="/azure/staff-form-display"exact component ={StaffParticularForm}></Route>
          </Switch>

        </div>

    </Router>
    </div>
  )
}

export default App;
