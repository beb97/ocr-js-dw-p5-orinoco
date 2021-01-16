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
     let tableTemplate = document.getElementById("item-table");

     let tableClone = tableTemplate.cloneNode(true)

     tableClone.removeAttribute("style");
     tableClone.getElementsByClassName("item-link")[0].innerHTML = item._id;
     tableClone.getElementsByClassName("item-link")[0].setAttribute("href", generateItemLink(item._id));
     tableClone.getElementsByClassName("name")[0].innerHTML = item.name;
     tableClone.getElementsByClassName("price")[0].innerHTML = item.price;
     tableClone.getElementsByClassName("desc")[0].innerHTML = item.description;
     tableClone.getElementsByClassName("img")[0].setAttribute("src", generateImageUrl(item.imageUrl));
     tableClone.getElementsByClassName("buttonAddToCart")[0].setAttribute("onClick", generateAddToCartLink(item._id));
     tableClone.getElementsByClassName("buttonRemoveFromCart")[0].setAttribute("onClick", generateRemoveFromCartLink(item._id));
     document.getElementById("item-list").appendChild(tableClone);

     const options = item[Object.keys(item)[0]];
     console.log(options);
    for (let option of options) {
        let optionHtml = document.createElement("option");
        optionHtml.text = option;
        optionHtml.value = option;
        tableClone.getElementsByClassName("item-options")[0].appendChild(optionHtml);
    }

 }