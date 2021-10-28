import {React} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { NotFound } from './pages/NotFound'
import { Profile } from './pages/Profile';
import { Home } from './pages/Home'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const login = useSelector(state => state.toolkit.login)
  const dispatch = useDispatch()
  return (
  <>
      <Header/>
      <main className="container content">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </main>
      <Footer/>
  </>
  );
}

export default App;
