(async () => {
 const currentPageUrl = new URLSearchParams(window.location.search);
 const id = currentPageUrl.get("id");
 const store = getCurrentStore();
 const url = '/api/'+store+'/'+id;
 await fetch(url)
 .then(response => response.json())
 .then(json => createItem(json));

})();

function createItem(item) {

  console.log(item);
  document.getElementsByClassName("item-link")[0].setAttribute("href", generateItemLink(item._id));
  document.getElementsByClassName("name")[0].innerHTML = item.name;
  document.getElementsByClassName("price")[0].innerHTML = formatPriceEuro(item.price);
  document.getElementsByClassName("desc")[0].innerHTML = item.description;
  document.getElementsByClassName("img")[0].setAttribute("src", generateImageUrl(item.imageUrl));
  document.getElementsByClassName("buttonAddToCart")[0].setAttribute("product", item._id);

  const options = item[Object.keys(item)[0]];
  document.getElementById("option-name").innerHTML = Object.keys(item)[0];
  console.log(options);
  for (let option of options) {
    let optionHtml = document.createElement("option");
    optionHtml.text = option;
    optionHtml.value = option;
    document.getElementsByClassName("item-options")[0].appendChild(optionHtml);
  }

}