type CalculateProps = {
  cart: CartItem[] | OrderItemDataBase[];
};

const calculateTotalPrice = ({ cart }: CalculateProps) => {
  const total = cart.reduce((accumulator, item) => {
    // Calculate the price for each item by multiplying the quantity with the item price
    const itemPrice = (item.quantity || 1) * item.price;

    // Add the calculated price to the total
    return accumulator + itemPrice;
  }, 0);
  // round the total to 2 decimal places
  return parseFloat(total.toFixed(2));
};

export default calculateTotalPrice;
