(async () => {
   const id = "";
   const url = '/api/furniture/';
   const items = await fetch(url)
      .then(response => response.json());
        createItems(items);

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
//     tableClone.getElementsByClassName("desc")[0].innerHTML = item.description;
     tableClone.getElementsByClassName("img")[0].setAttribute("src", generateImageUrl(item.imageUrl));
     tableClone.getElementsByClassName("buttonAddToCart")[0].setAttribute("onClick", generateAddToCartLink(item._id));
     tableClone.getElementsByClassName("buttonRemoveFromCart")[0].setAttribute("onClick", generateRemoveFromCartLink(item._id));
     document.getElementById("item-list").appendChild(tableClone);

 }