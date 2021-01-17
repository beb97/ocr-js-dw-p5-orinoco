(async () => {

	let total = 0;
	let quantity = 0;
	const store = getCurrentStore();

	for(let item of cart.items) {

		const url = '/api/'+store+'/'+item.id;
		await fetch(url)
		.then(response => response.json())
		.then(json => {
			createCartItem(json, item.qty);
			total += item.qty*json.price;
			quantity += parseInt(item.qty);
		});

	}

	document.getElementById("item-list-total").innerHTML = formatPriceEuro(total);
	document.getElementById("item-list-qty").innerHTML = quantity;
})();


function createCartItem(item, qty) {
	console.log(item);
	let tableTemplate = document.getElementById("item-table");

	let tableClone = tableTemplate.cloneNode(true)

	tableClone.removeAttribute("style");
	tableClone.getElementsByClassName("item-link")[0].setAttribute("href", generateItemLink(item._id));
	tableClone.getElementsByClassName("name")[0].innerHTML = item.name;
	tableClone.getElementsByClassName("price")[0].innerHTML = formatPriceEuro(item.price);
	tableClone.getElementsByClassName("qty")[0].innerHTML = qty;
	tableClone.getElementsByClassName("total")[0].innerHTML = formatPriceEuro(qty*item.price);
	tableClone.getElementsByClassName("img")[0].setAttribute("src", generateImageUrl(item.imageUrl));
	tableClone.getElementsByClassName("buttonAddToCart")[0].setAttribute("product", item._id);
	tableClone.getElementsByClassName("buttonRemoveOneFromCart")[0].setAttribute("product", item._id);
	tableClone.getElementsByClassName("buttonRemoveFromCart")[0].setAttribute("product", item._id);
	document.getElementById("item-list").appendChild(tableClone);

	return qty*item.price;

}