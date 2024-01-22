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

  // Use toFixed to round the total to 2 decimal places and parseFloat to convert it back to a number
  return parseFloat(total.toFixed(2));
};

export default calculateTotalPrice;
