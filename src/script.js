let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let lovedItems = JSON.parse(localStorage.getItem("key")) || [];

let cartAmount = document.getElementById('cart-amount');

let selectedProductId = localStorage.getItem("selectedProductId");

let details = document.getElementById("details");

let shoppingIcon = document.getElementById("bi-bag");
let heartIcon = document.getElementById('heart')

let loveAmount = document.getElementById("love-amount");

let heart = document.getElementById("heart");

console.log(selectedProductId);

let img = document.getElementById("product-img");
let bag = document.getElementById("add-to-bag");


let generateShop = () => {
	return (shop.innerHTML = shopItemsData
		.map((x) => {
            let { id, productName, productPrice, desc, img } = x;
            let search = basket.find((x) => x.id === id) || [];
			return ` 
		<a href="/shoppingCart/productPage.html">
			<div class="item " onClick = "handleProductClick('${id}')">
				<div class="prod-img">
					<img class="log-img" id = "log-img"src="${img}" />
						</div>
						<div class="details">
							<h3>${productName}</h3>
							<p>${desc}</p>
							<div class="price-quantity flex">
								$ ${productPrice}
							</div>
						</div>
					</div>
				</div>
					</a> `;
		})
		.join(""));
};

generateShop();


function updateCartIcon() {
 	basket = JSON.parse(localStorage.getItem("data")) || [];
	let sum = 0;

	for (let i = 0; i < basket.length ; i++){
		sum += parseInt(basket[i].item, 10);
	}

	cartAmount.innerText = sum;
	
};

updateCartIcon();



// to be fixed
// window.addEventListener("scroll", function () {
// 	let videoSection = document.getElementById("video");
//     let logoName = document.getElementById("logo-name");
//     let bag = this.document.getElementById('bi-bag')

//     let movingLogo = this.document.getElementById('logf');
// 	let videoRect = videoSection.getBoundingClientRect();

// 	if (videoRect.top >= 0 && videoRect.bottom <= window.innerHeight) {
// 		// Video section is in the viewport, set the text color to white
//         logoName.style.color = "white";
//         bag.style.color = "white";
//         movingLogo.src = "./assets/2.png";
        
// 	} else {
// 		// Video section is not in the viewport, set the text color to black
//         logoName.style.color = "black";
//         movingLogo.src = "./assets/log1.png";
//         bag.style.color = "black";
// 	}
// });

updateCartIcon();

function handleProductClick(id) {
	localStorage.setItem("selectedProductId", id);
	window.location.href = "/shoppingCart/productPage.html";
}


//update love icon


let updateLove = () => {
	let amount = document.getElementById("love-amount");
	let sum = lovedItems.length;

	amount.innerText = sum;
	console.log("total number of items", sum);
};

updateLove();


