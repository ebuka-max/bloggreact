import './App.css'
import Home from './component/Home'
import Navbar from './component/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Post from './component/Post'
import ChattDetails from './component/ChattDetails'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='body'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/post'>
              <Post />
            </Route>
            <Route path='/chatts/:id'>
              <ChattDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
