(async () => {
   const id = "";
   const url = '/api/furniture/';
   const items = await fetch(url)
      .then(response => response.json());
        createItems(items);

})();

 function createItem(item) {
     console.log(item);
     let itemTemplate = document.getElementById("item-template");

     let tableClone = itemTemplate.cloneNode(true)

     tableClone.removeAttribute("style");
//     tableClone.getElementsByClassName("item-link")[0].innerHTML = item._id;
     tableClone.getElementsByClassName("item-link")[0].setAttribute("href", generateItemLink(item._id));
     tableClone.getElementsByClassName("name")[0].innerHTML = item.name;
     tableClone.getElementsByClassName("price")[0].innerHTML = formatPriceEuro(item.price);
     tableClone.getElementsByClassName("img")[0].setAttribute("src", generateImageUrl(item.imageUrl));
     document.getElementById("item-list").appendChild(tableClone);

 }