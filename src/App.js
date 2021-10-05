
import './App.css';
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
import Login from './Component/Login';
import AddProduct from './Component/AddProduct';
import UpdateProduct from './Component/UpdateProduct';
import Register from './Component/Register';
import Product from './Component/Product';
import ProductList from './Component/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {/* <Header /> */}
          {/* <h2> hello react </h2> */}
          <Route path="/login"> <Login />   </Route>
          <Route path="/add"> <Product actionProduct={AddProduct} />   </Route>
          <Route path="/update/:id"> <Product actionProduct={UpdateProduct} />   </Route>
          <Route path="/register"> <Register />   </Route>
          <Route path="/"> <Product actionProduct={ProductList} />   </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
