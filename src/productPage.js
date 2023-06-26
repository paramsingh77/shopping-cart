let basket = JSON.parse(localStorage.getItem("data")) || [];

let lovedItems = JSON.parse(localStorage.getItem("key")) || [];

let selectedProductId = localStorage.getItem("selectedProductId");

let details = document.getElementById("details");

let shoppingIcon = document.getElementById("bi-bag");

let cartAmount = document.getElementById("cart-amount");

let loveAmount = document.getElementById("love-amount");


let heart = document.getElementById("heart");

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
            <input type="number" id="quantity" class="quantity" name="quantity" min="1" max="5" value="${getQuantity(
							search.id
						)}">
            </div>
            <div class="flex-contian ">
            <h4 class="button" onclick="submit('${search.id}')">Add to Bag</h4>
           <a onclick="lovedProducts('${
							search.id
						}')"> <svg onload = " myFunction('${search.id}')" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" id="heart" class="bi bi-suit-heart-fill" id="heart" viewBox="0 0 16 16">
  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
</svg>
</a>
            </div>
      </div>
    `;
};

generatePage(selectedProductId);

function submit(id) {
    console.log('id is',id);
	let search = basket.find((x) => x.id === id);
    let quantity = document.getElementById("quantity").value;
      console.log("The quanatiy is", quantity);
    if (quantity == 0) {
       return console.log('quantity us zero');
    }
	else if (search === undefined) {
		basket.push({
			id: id,
			item: quantity,
        });
        console.log('quantity is',quantity);
	} else {
		console.log(search);
		search.item = quantity;
	}

	console.log(basket);
	localStorage.setItem("data", JSON.stringify(basket));
	updateCartIcon();
}

let updateHeartIcon = () => {
	let inTxt = document.getElementById("love-amount");
     let heartIcon = document.querySelector("#heart path");
	if (inTxt.innerHTML == 0) {
		heartIcon.style.fill = "grey";
		loveAmount.style.color = "grey";
		console.log("element targeted");
	} else {
		console.log("element targeted 1");
		heartIcon.style.fill = "white";
		loveAmount.style.color = "#ffffff";
	}
};
updateHeartIcon();

let updateCartIcon = () => {
	let basket = JSON.parse(localStorage.getItem("data")) || [];
	let inTxt = document.getElementById("cart-amount");
	let sum = 0;
	for (let i = 0; i < basket.length; i++) {
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
		cartAmount.style.color = "white";
	}
};

updateCartIcon();

let lovedProducts = (id) => {
	let search = lovedItems.find((x) => x.id === id);
	let heartPath = document.querySelector("#heart path");
	if (search === undefined) {
		lovedItems.push({
            id: id,
            color:"red",
		});

	} else {
		let index = lovedItems.findIndex((x) => x.id === id);
		if (index != -1) {
			lovedItems.splice(index, 1);
		}
	}

	localStorage.setItem("key", JSON.stringify(lovedItems));
    console.log(lovedItems);
    updateLove();
};



function getQuantity(id) {
	let search = basket.find((x) => x.id === id);
    return search ? search.item : 0;
    
}


// Updating love icon

let updateLove = () => {
    let amount = document.getElementById('love-amount');
    let sum = lovedItems.length;
    
    amount.innerText = sum;
    console.log('total number of items',sum);
}


updateLove();


function myFunction(id) {
    console.log('the color is ', id);
    let search = lovedItems.find((x) => x.id === id);
    let heartPath = document.querySelector("#heart path");
  
    if (search === undefined) {
        console.log("color changed");
        heartPath.setAttribute("fill", "black");
    } else {
        console.log("color changed");
        heartPath.setAttribute("fill", "red");
    }
}

window.addEventListener("load", function () {
 // Replace "your-id" with the actual ID you want to pass
	myFunction(id);
});
