import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import IntroduceWrapPage from "./js/introduce/IntroduceWrapPage";
import HomeWrapPage from './js/home/HomeWrapPage';
import './reset.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/introduce">
          <IntroduceWrapPage />
        </Route>
        <Route path="/">
          <HomeWrapPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
