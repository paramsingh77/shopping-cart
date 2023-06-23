let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let basket = JSON.parse(localStorage.getItem("data")) || [];

console.log(basket);

let updateCartIcon = () => {
	let inTxt = document.getElementById("cart-amount");
	//used here reduce function to get the sum of items to show the current items in the bag
	inTxt.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

updateCartIcon();

let generateCartItems = () => {
	if (basket.length !== 0) {
		console.log("Basket is not empty");
		return shoppingCart.innerHTML = basket.map((x) => {
			return `
			<div class="cart-pick" >Hello</div>
			`
		}).join("");


	} else {
		shoppingCart.innerHTML = ``;
		label.innerHTML = `
		<div class="xart">
		<h2  class="xart">Cart is Empty<h2>
		<a href="index.html">
           <h6 class="HomeButton">Back to Home</h6>
		   </div>
</a>

		`;
	}
};

generateCartItems();
