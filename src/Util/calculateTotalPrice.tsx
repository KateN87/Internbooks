const calculateTotalPrice = (cart: CartItem[]) => {
  const total = cart.reduce((total, book) => {
    // Calculate the price for each book by multiplying the quantity with the book price
    const bookPrice = (book.quantity || 1) * book.price;

    // Add the calculated price to the total
    return total + bookPrice;
  }, 0);
  // round the total to 2 decimal places
  return parseFloat(total.toFixed(2));
};

export default calculateTotalPrice;
