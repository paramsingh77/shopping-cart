let shop = document.getElementById("shop");
let shopItemsData = [
	{
		id: "sjdkl",
		productName: "Lv Shirt",
		productPrice: 45,
		desc: "Great Quality",
		img: "./assets/productImages/pic1.jpeg",
	},

	{
		id: "djn fsjkd",
		productName: "Zara Shirt",
		productPrice: 59,
		desc: "Inen",
		img: "./assets/productImages/pic2.jpeg",
	},
	{
		id: "sfjdhkjd",
		productName: "Shorts",
		productPrice: 79,
		desc: "Denim",
		img: "./assets/productImages/pic3.jpeg",
	},
	{
		id: "djkhfkhk",
		productName: "Denim Shorts",
		productPrice: 99,
		desc: "poly",
		img: "./assets/productImages/pic4.jpeg",
	},
];

let basket = [];

let generateShop = () => {
	return (shop.innerHTML = shopItemsData
		.map((x) => {
			let { id, productName, productPrice, desc, img } = x;
			return ` <div class="item ">
				<div class="prod-img">
					<img class="log-img" id = "log-img" data-options="zoomWidth:70%; zoomHeight:100%" src="${img}" width="200" height="200" />
						</div>
						<div class="details">
							<h3>${productName}</h3>
							<p>${desc}</p>
							<div class="price-quantity flex">
								$ ${productPrice}
								<div class="inc-dec">
									<svg
										xmlns="http://www.w3.org/2000/svg"
                                       onclick = "decrement('${id}')"
                                        width="16"
										height="16"
										fill="currentColor"
										class="bi bi-dash"
										viewBox="0 0 16 16"
                                        
									>
										<path
											d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
										/>
									</svg>
                                    </div>
                                    <div id = "${id}" id="skp" class="flex">0</div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="16"
										height="16"
										fill="currentColor"
										class="bi bi-plus-lg"
										viewBox="0 0 16 16"
                                        onclick = "increment('${id}')"
									>
										<path
											fill-rule="evenodd"
											d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
										/>
									</svg>
								</div>
							</div>
						</div>
					</div> `;
		})
		.join(""));
};

generateShop();
let sum = 0;
// const increment = document.querySelectorAll(' bi-plus');
// const decrement = document.querySelectorAll('bi-dash');
let increment = (id) => {
	let search = basket.find((x) => x.id === id);

	if (search === undefined) {
		sum++;
		basket.push({
			id: id,
			item: 1,
		});
	} else {
		sum++;
		console.log(search);
		search.item += 1;
	}
	console.log(basket);
	updateCartIcon(sum);
	update(id);
};

function decrement(id) {
	let search = basket.find((x) => x.id === id);

	if (search.item === 0) return;
	else {
		sum--;
		console.log(search);
		search.item -= 1;
	}

	console.log(basket);
	update(id);
}

// does the item exists
// if exists decrement it.

let update = (id) => {
	let search = basket.find((x) => x.id === id);
	if (search) {
		console.log(search.item);
		document.getElementById(id).innerHTML = search.item;
	}

	//update cart icon will be updated every time by getting the new sum of update items in the value.
	updateCartIcon();
};

let updateCartIcon = () => {
	let inTxt = document.getElementById("cart-amount");
	//used here reduce function to get the sum of items to show the current items in the bag
	inTxt.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

const getTag = document.getElementById("nav");
const logi = document.getElementById("bi-bag");

const logoName = document.getElementById("logo-name");

const movingLogo = document.getElementById("moving-logo");

getTag.addEventListener("mouseover", () => {
	getTag.style.backgroundColor = "white";
	logoName.style.color = "black";
	logi.style.color = "black";
	movingLogo.style.color = "white";
});


getTag.addEventListener("mouseout", () => {
	getTag.style.backgroundColor = "transparent";
	logoName.style.color = "white";
	logi.style.color = "white";
	movingLogo.style.display = "visible";
});


window.addEventListener("scroll", function () {
	let element = document.getElementById("logo-name");
	let rgb = window.getComputedStyle(element).backgroundColor.match(/\d+/g);

	let luminance = Math.round(
		(parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
			1000
	);

	if (luminance > 128) {
		element.style.color = "black";
	} else {
		element.style.color = "white";
	}
});



// to be fixed
window.addEventListener("scroll", function () {
	let videoSection = document.getElementById("video");
	let logoName = document.getElementById("logo-name");

	let videoRect = videoSection.getBoundingClientRect();

	if (videoRect.top >= 0 && videoRect.bottom <= window.innerHeight) {
		// Video section is in the viewport, set the text color to white
		logoName.style.color = "white";
	} else {
		// Video section is not in the viewport, set the text color to black
		logoName.style.color = "black";
	}
});