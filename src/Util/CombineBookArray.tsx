let combinedArray: BookInventoryItem[] = [];

// Function to combine books and inventory
const combineBookArrays = (books: Book[], inventory: InventoryItem[]) => {
  combinedArray = [];
  // Iterate through books
  books.forEach((book) => {
    // Find the corresponding inventory item
    const inventoryItem = inventory.find(
      (item) => item.itemCode === book.itemCode
    );

    // If inventory item exists, combine the information
    if (inventoryItem) {
      const combinedBook = { ...book, quantity: inventoryItem.quantity };
      combinedArray.push(combinedBook);
    }
  });

  return combinedArray;
};

export default combineBookArrays;
