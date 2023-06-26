let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");

let shoppingIcon = document.getElementById("bi-bag");

let cartAmount = document.getElementById("cart-amount");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let header = document.getElementById("header");

let checkoutBox = document.getElementById("checkOutBox");

let upperCase = document.getElementById("uppercase");



console.log(basket);

let updateCartIcon = () => {
	let inTxt = document.getElementById("cart-amount");
	//used here reduce function to get the sum of items to show the current items in the bag
	let sum = 0;

	for (let i = 0; i < basket.length; i++){
		sum += parseInt(basket[i].item, 10);
	}
	inTxt.innerText = sum;



	if (inTxt.innerHTML == 0) {
		shoppingIcon.style.color = "grey";
		cartAmount.style.color = "grey";
		console.log("element targeted");
	} else {
		console.log("element targeted 1");
		shoppingIcon.style.color = "white";
		cartAmount.style.color = "white";
	}
};

updateCartIcon();


function submit(id,quantity) {
	let search = basket.find((x) => x.id === id);
	// let quantity = document.getElementById("quantity").value;
	if (search === undefined) {
		basket.push({
			id: id,
			item: quantity,
		});
	} else {
		console.log(search);
		search.item = quantity;
	}

	console.log(basket);
	localStorage.setItem("data", JSON.stringify(basket));
	updateCartIcon();
}



let generateCartItems = () => {
	if (basket.length !== 0) {
		console.log("Basket is not empty");

		header.innerHTML = `CREATE A WISHLIST`;
		checkoutBox.innerHTML = `
		<div class="card-price" id="card-price">
			
		</div>
		`;
		return (shoppingCart.innerHTML = basket
			.map((x) => {
				let { id, item } = x;
				let search = shopItemsData.find((y) => y.id === id) || [];
				return `
		<div class="cart-pick flex" >
			 <div class="card flex">
					<img class="prod-img" src = ${search.img1}  alt = " "/>
					<h5 id="uppercase" >${search.productName.toUpperCase()}</h5>
						<div class="details flex">
						<div className = "cart-buttons">
							  <input type="number" oninput="submit('${id}',this.value)" class="show-arrows" min="1" max="10" value="${item}">
							 </div>
							<div className = "title-price-x">$ ${search.productPrice}</div>
							<h3  onclick = "updateCartPage('${search.id}')" class="remove">Remove</h3>
			    		</div>
			</div>	 
		</div>
			`;
			})
			.join(""));
	} else {
		header.innerHTML = ``;
		checkoutBox.innerHTML = ``;
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

let updateCartPage = (id) => {
    console.log(id);
	
    let index = basket.findIndex((x) => x.id === id);
	
    if (index !== -1) {
        basket.splice(index, 1);
        console.log('Item removed');
    } else {
        console.log('Item not found');
    }

	console.log('Update complete');
	generateCartItems();
	localStorage.setItem("data", JSON.stringify(basket));
	
};

