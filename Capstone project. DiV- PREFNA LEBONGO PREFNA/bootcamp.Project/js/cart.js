// select cart-items-count span
const cartItemsCountSpan = document.querySelector("#cart-items-count");
// select all add to cart buttons
const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");

// for every add to cart listener add a click lister with handle incrementCartItemsCount
addToCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener("click", incrementCartItemsCount);
});

// an event listener to increase cart items count when a cart button is clicked
function incrementCartItemsCount() {
  // get the current cart items count value from the cartItemsCountSpan
  let itemsCount = Number(cartItemsCountSpan.textContent);

  // if the value of items count is not a number reset it to zero
  if (isNaN(itemsCount)) {
    itemsCount = 0;
  }

  // update items count by 1
  itemsCount += 1;

  // update the text content of cart items count span to the updated value items count
  cartItemsCountSpan.textContent = itemsCount.toString();
}
