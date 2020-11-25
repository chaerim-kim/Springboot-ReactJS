import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListUserComponent from './components/ListUserComponent';
import HeaderComponents from './components/HeaderComponents';
import FooterComponents from './components/FooterComponents';
import CreateUserComponent from './components/CreateUserComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponents/>

            <div className="container">
              {/* redirections to diff pages */}
              <Switch> 
                <Route path = "/" exact component = {ListUserComponent}></Route>
                <Route path = "/users" component = {ListUserComponent}></Route>
                <Route path = "/add_user" component = {CreateUserComponent}></Route>
               </Switch>
            </div>


            <FooterComponents />
        </Router>
    </div>
  );
}

export default App;
