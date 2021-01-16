(async () => {
   const currentPageUrl = new URLSearchParams(window.location.search);
   const id = currentPageUrl.get("id");
   const url = '/api/furniture/'+id;
   const item = await fetch(url)
      .then(response => response.json());
        createItem(item);
})();

 function createItem(item) {
     console.log(item);


//     document.getElementsByClassName("id")[0].innerHTML = item._id;
     document.getElementsByClassName("item-link")[0].setAttribute("href", generateItemLink(item._id));
     document.getElementsByClassName("name")[0].innerHTML = item.name;
     document.getElementsByClassName("price")[0].innerHTML = formatPriceEuro(item.price);
     document.getElementsByClassName("desc")[0].innerHTML = item.description;
     document.getElementsByClassName("img")[0].setAttribute("src", generateImageUrl(item.imageUrl));
     document.getElementsByClassName("buttonAddToCart")[0].setAttribute("onClick", generateAddToCartLink(item._id));
     document.getElementsByClassName("buttonRemoveFromCart")[0].setAttribute("onClick", generateRemoveFromCartLink(item._id));

     const options = item[Object.keys(item)[0]];
     console.log(options);
    for (let option of options) {
        let optionHtml = document.createElement("option");
        optionHtml.text = option;
        optionHtml.value = option;
        document.getElementsByClassName("item-options")[0].appendChild(optionHtml);
    }

 }