import { List, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Button } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";

export default function Cart({ items, onRemoveItem }) {
  const cartItems = items.reduce((acc, item) => {
    const existingItemIndex = acc.findIndex((i) => i.name === item.name);
    if (existingItemIndex >= 0) {
      acc[existingItemIndex].quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div id="cart">
      <h2 className="heading">Cart</h2>
      <List>
        {cartItems.map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt={item.name} src={item.image} style={{width: '100px', height: '100px'}}/>
            </ListItemAvatar>
            <ListItemText primary={<span style={{ fontSize: '1.5em',marginLeft:"10px",fontFamily:"cursive"}}>{item.name}</span>} secondary={<span style={{ fontSize: '1.5em',marginLeft:"10px",fontFamily:"cursive"}}>₹{item.price} x {item.quantity}</span>} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => onRemoveItem(index, item.price)}>
                <DeleteIcon color="secondary"/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
        <Button variant="contained" color="primary" disabled={!cartItems.length}>
          Total: ₹{total}
        </Button>
      </div>
      <button id="bbtn">Buy Now</button>
    </div>
  );
}
