import './App.css';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import Main from './compontents/Main'

function App() {
  return (
      // <Main></Main>
      <Router>
        <Route path="/" component={Main} />
        <Route exact path="/" render={() => <Redirect to="/home" push />} />
      </Router>
  )
}

export default App;
