
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetail from './components/ProductDetail/ProductDetail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Shop/>
          </Route>
          <Route path="/home">
            <Shop/>
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/product/:productkey">
            <ProductDetail/>
          </Route>
          <Route Path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
