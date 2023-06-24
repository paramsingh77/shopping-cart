let shop = document.getElementById("shop");

let basket =  JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
	return (shop.innerHTML = shopItemsData
		.map((x) => {
            let { id, productName, productPrice, desc, img } = x;
            let search = basket.find((x) => x.id === id) || [];
			return ` <div class="item ">
				<div class="prod-img">
					<img class="log-img" id = "log-img"src="${img}" />
						</div>
						<div class="details">
							<h3>${productName}</h3>
							<p>${desc}</p>
							<div class="price-quantity flex">
								$ ${productPrice}
								<div class="inc-dec flex">
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
                                    <div id = "${id}" id="skp" class="flex">
                                    ${search.item === undefined ? 0 : search.item}
                                    </div>
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
						</div>
					</div> `;
		})
		.join(""));
};

generateShop();


let increment = (id) => {
	let search = basket.find((x) => x.id === id);

	if (search === undefined) {
		basket.push({
			id: id,
			item: 1,
		});
	} else {
	
		console.log(search);
		search.item += 1;
	}
	console.log(basket);

 
    update(id);
    localStorage.setItem("data", JSON.stringify(basket));
};

function decrement(id) {
	let search = basket.find((x) => x.id === id);

    if (search.item === undefined) return;
    else if (search.item === 0) return;
	else {
		console.log(search);
		search.item -= 1;
	}

	console.log(basket);

      update(id);
	//it will remove the product with item  zero.
	basket = basket.filter((x) => x.item !== 0);
  
    
	//Here we are pushing the data into the basket
	localStorage.setItem("data", JSON.stringify(basket));
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



