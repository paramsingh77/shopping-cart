let basket = JSON.parse(localStorage.getItem("data")) || [];

let selectedProductId = localStorage.getItem("selectedProductId");

let details = document.getElementById("details");

console.log(selectedProductId);

let img = document.getElementById("product-img");
let bag = document.getElementById("add-to-bag");

let generatePage = (selectedProductId) => {
	let search = shopItemsData.find((x) => x.id === selectedProductId);

	img.innerHTML = `
    <div class="prod-back">
         <img  class="product-image" src=${search.img}>
    </div>
    `;

	details.innerHTML = `
        <div class="details-card">
                <h3>${search.productName}</h3>
                <h4>Price: $ ${search.productPrice}</h4>
                <h4>Description</h4>
                <h5>${search.desc}</h5>
         </div>
    `;

	bag.innerHTML = `
      <div class="price-tag">

            <div class="flex-contian margin">
             <h4>Price</h4>
             <h4 >$${search.productPrice}</h4>
            </div>

            <div class="flex-contian margin">
            <h4>Stock</h4>
            <h4><i style="color: green" class="stock">inStock</i></h3>
            </div>
           
            <div class="flex-contian margin">
            <h4><label for="quantity">Quantity:</label></h4>
            <input type="number" id="quantity" class="quantity" name="quantity" min="1" max="5" value="${search.item}">
            </div>

            <h4 class="button" onclick="submit('${search.id}')">Add to Bag</h4>
      </div>
    `;
};

generatePage(selectedProductId);

function submit(id) {
	let search = basket.find((x) => x.id === id);
	let quantity = document.getElementById("quantity").value;
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

let updateCartIcon = () => {
    
    let basket = JSON.parse(localStorage.getItem("data")) || [];
    let inTxt = document.getElementById('cart-amount');
    let sum = 0;
    for (let i = 0; i < basket.length ; i++) {
        sum += parseInt(basket[i].item, 10);
    }

    inTxt.textContent = sum;

	if (inTxt.innerHTML == 0) {
		shoppingIcon.style.color = "grey";
		cartAmount.style.color = "grey";
		console.log("element targeted");
	} else {
		console.log("element targeted 1");
		shoppingIcon.style.color = "white";
		cartAmount.style.color = "#white";
	}
};

updateCartIcon();