import './App.css';
import Header from './header';
import Content from './content';
import Tutorial from './tutorial';
import Product from './product';
import Footer from './footer';
// import Cart from './cart';
function App() {
  return (
    <div>
     <Header/>
     <Content/>
     <Tutorial/>
     <Product/>
     <Footer/>
     {/* <Cart items={itemsInCart} /> */}
     </div>
  );
}

export default App;
