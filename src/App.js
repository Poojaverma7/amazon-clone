import './App.css';
import Navbar from './Components/Navbar/navbar';
import HomeScreen from './Screen/HomeScreen/HomeScreen.js';
import { Routes , Route } from 'react-router-dom';
import Product from './Screen/Product/Product.js';
import Footer from './Components/Footer/footer.js'
import Cart from './Screen/Cart/Cart.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen />}/>
        <Route path='/products' element={<Product />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
