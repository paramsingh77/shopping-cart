let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let lovedItems = JSON.parse(localStorage.getItem("key")) || [];

let cartAmount = document.getElementById("cart-amount");

let selectedProductId = localStorage.getItem("selectedProductId");

let details = document.getElementById("details");

let shoppingIcon = document.getElementById("bi-bag");
let heartIcon = document.getElementById("heart");

let loveAmount = document.getElementById("love-amount");

let heart = document.getElementById("heart");

console.log(selectedProductId);

let img = document.getElementById("product-img");
let bag = document.getElementById("add-to-bag");

let generateShop = () => {
    if (lovedItems.length !== 0) {
        return (shop.innerHTML = lovedItems
					.map((x) => {
						console.log("loveditem", lovedItems);
						return ` 
	
			<div class="item " >
				<div class="prod-img">
                	<a  href="/shoppingCart/productPage.html">
					<img class="log-img" id = "log-img"src="${x.img}" />
                    </a> 
						</div>
						<div class="details  onClick = "handleProductClick('${x.id}')"">
							<h3>${x.productName}</h3>
							<p>${x.desc}</p>
							<div class="price-quantity flex">
								$ ${x.productPrice}
                                <h5 onclick="remove('${x.id}')" class="remove">Remove</h5>
							</div>
						</div>
					</div>
				</div>
					`;
					})
					.join(""));
    }
    else {
		shop.innerHTML = `
		<div class="set-bg">
        <div class="text">
          <h3 class="empty-cart"> You don't have Favorite items yet </h3>
		  <div class="flex button-container">
		 <a href="index.html"> <h4 class="guide-to">Products</h4> </a>
		 <a href="cart.html"> <h4 class="guide-to">Basket</h4></a>
		  </div>
        </div>
       
     <div class="bg-flower bg-check" >
        </div>
			</div>`;

 
    }
	
};

generateShop();

function updateCartIcon() {
	basket = JSON.parse(localStorage.getItem("data")) || [];
	let sum = 0;

	for (let i = 0; i < basket.length; i++) {
		sum += parseInt(basket[i].item, 10);
	}

	cartAmount.innerText = sum;
}

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


function remove(id) {
    let search = lovedItems.find((x) => x.id === id);
    if (search) {
        let index = lovedItems.findIndex((x) => x.id === id);
        if (index !== -1) {
            lovedItems.splice(index, 1);
        }
    }
    localStorage.setItem("key", JSON.stringify(lovedItems));
    console.log(lovedItems);
    generateShop();

}