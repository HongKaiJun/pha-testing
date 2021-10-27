import { BrowserRouter as Router, Route, Switch } from 'react-dom'
import './App.css'
import StaffParticularForm from './components/StaffParticularForm'

function App() {
  return (
    <div className='App'>
      {/*<Userlogin />*/}
      <StaffParticularForm/>
      {/*<Router call>
      {/*If need header put here *
        <div className ="container">
          <Switch>
            <Route path ="/" exact componnent ={""}></Route>
          </Switch>

        </div>

    </Router>*/}
    </div>
  )
}

export default App
