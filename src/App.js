import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users/Users';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MessagesList from './components/Message/MessagesList';

function App() {
  const uiMessages = useSelector(state => state.ui.messages);

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
          </nav>
          <div className="main">
            <MessagesList messages={uiMessages} />
            <Switch>
              <Route path="/" exact>
                <Home />
                <Users />
              </Route>
              <Route path="/users" component={Users} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
