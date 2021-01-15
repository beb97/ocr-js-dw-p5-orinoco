function createItems(items) {
   for(let item of items) {
     createItem(item);
     }
 }

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
     tableClone.getElementsByClassName("img")[0].innerHTML = generateImageUrl(item.imageUrl);
     document.getElementById("item-list").appendChild(tableClone);

 }

function generateImageUrl(url) {
    let urlSplit = url.split("/");
    return urlSplit[urlSplit.length -1];
}


function generateItemLink(id) {
//    return "item/";
    return "item/?id="+id;
}