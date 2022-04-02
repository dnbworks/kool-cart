import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './views/ProductList';
import Details from './views/Details';
// import Cart from './components/Cart';
import Default from './views/Default';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/products" component={ProductList} />
        <Route path="/product/:id">
          <Details/>
        </Route>
        {/* <Route path="/cart">
          <Cart/>
        </Route> */}
        <Route path="*">
          <Default/>
        </Route>
      </Switch>
      <Modal/>
      <Footer/>
    </>
  );
}

export default App;
