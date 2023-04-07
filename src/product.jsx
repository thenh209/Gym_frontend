import { useState } from "react";
import { Container, Grid } from "@material-ui/core";
import product1 from './assets/product1.jpg';
import product2 from './assets/product2.jpeg';
import product3 from './assets/product3.jpeg';
import product4 from './assets/product4.jpg';
import Cart from "./cart";

export default function Product(){
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleAddToCart = (item, price) => {
    setItemsInCart((prevItems) => [...prevItems, {name: item.name, image: item.image, price: item.price}]);
    setTotalAmount((prevAmount) => prevAmount +Number(price));
  };
  const handleRemoveFromCart = (index, price) => {
    setItemsInCart((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
    setTotalAmount((prevAmount) => prevAmount - Number(price));
  };
  return (
    <div id="product">
      <h1 className="heading">Products</h1>
      <Container sx={{marginY:15}}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}>
            <div className="card flip-vertical">
              <div className="front" ><img className="img"src={product1} alt=""/></div>
              <div className="back">
                <h2>PROTEIN POWDER</h2>
                <p>Never Premium Whey Protein 1kg (Chocolate flavour) l 24g Protein/Serving For Muscle Building & Recovery, 25 Servings</p>
                <h4>Price: ₹3000</h4>
                <button style={{backgroundColor:"rgb(244, 64, 85)",fontSize:"1.2em",borderRadius:"5px"}}id="add" value={3000} onClick={() => handleAddToCart({name: "Protein Powder", image: product1,price:3000})}>Add to cart</button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}>
            <div className="card flip-vertical">
              <div className="front" ><img className="img"src={product2} alt=""/></div>
              <div className="back">
                <h2>HAND GRIPPER</h2>
                <p>Never Adjustable Hand Grip Strengthener, Hand Gripper With Counter for Men & Women for Gym Workout Hand Exercise Equipment for Forearm Exercise, Finger Exercise Power Gripper - Army Green - 40kg</p>
                <h4>Price: ₹300</h4>
                <button style={{backgroundColor:"rgb(244, 64, 85)",fontSize:"1.2em",borderRadius:"5px"}}id="add" value={3000} onClick={() => handleAddToCart({name: "Hand Gripper", image: product2,price:300})}>Add to cart</button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}>
            <div className="card flip-vertical">
              <div className="front" ><img className="img"src={product3} alt=""/></div>
              <div className="back">
                <h2>RESISTANCE BAND</h2>
                <p>Never Resistance Bands for Workout Dual Color Heavy Resistance Band for Stretching, Pull ups, Home Exercise Resistance Band for Gym Workout Stretch for Men and Women</p>
                <h4>Price: ₹400</h4>
                <button style={{backgroundColor:"rgb(244, 64, 85)",fontSize:"1.2em",borderRadius:"5px"}}id="add" value={3000} onClick={() => handleAddToCart({name: "Resistance Band", image: product3,price:400})}>Add to cart</button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}}>
            <div className="card flip-vertical">
              <div className="front" ><img className="img"src={product4} alt=""/></div>
              <div className="back">
                <h2>SKIPPING ROPE</h2>
                <p>Never Skipping Rope For Men & Women Adjustable Jumping Rope For Men Skipping Rope For Women rassi jumping Skipping Rope For Kids Jump Rope For Men Gym Rope / Exercise Rope For Men Workout</p>
                <h4>Price: ₹200</h4>
                <button style={{backgroundColor:"rgb(244, 64, 85)",fontSize:"1.2em",borderRadius:"5px"}}id="add" value={3000} onClick={() => handleAddToCart({name: "Skipping Rope", image: product4,price:200})}>Add to cart</button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Cart items={itemsInCart} onRemoveItem={handleRemoveFromCart} />
    </div>
  );
}
