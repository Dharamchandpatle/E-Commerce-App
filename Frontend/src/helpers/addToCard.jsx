const addToCart = (e, id) => {
    e?.stopPropagation();    // Prevent event from bubbling up
    e?.preventDefault();     // Prevent default behavior (like form submission or link clicking)

    // Add the logic for adding the item to the cart here
    console.log(`Item with ID ${id} added to cart.`);
};

export default addToCart;
