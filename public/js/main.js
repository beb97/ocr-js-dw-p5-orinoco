( () => {

    let quantity = 0;
     for (var i = 0; i < localStorage.length; i++){
         const qty = localStorage.getItem(localStorage.key(i));
          quantity += parseInt(qty);
     }
     if (quantity > 0) {
     document.getElementById("cart-count").innerHTML = "("+quantity+")";
     }

} )();

function createItems(items) {
   for(let item of items) {
     createItem(item);
     }
 }

function generateImageUrl(url) {
    let urlSplit = url.split("/");
    return "/img/"+urlSplit[urlSplit.length -1];
}

function generateItemLink(id) {
    return "/item/?id="+id;
}

function addToCart(button) {
    addToCartQuantity(button.getAttribute("product"), 1);
}

function removeOneFromCart(button) {
    addToCartQuantity(button.getAttribute("product"), -1);
}

function addToCartQuantity(id, qte) {

    let newQty = getItemQuantity(id)+parseInt(qte);
    if(newQty < 1) {
    localStorageRemove(id);
    } else {
    localStorage.setItem(id, newQty);
    }

    pageReload();
}

function removeFromCart(button) {
   localStorageRemove(button.getAttribute("product"));
   pageReload();
}

function localStorageRemove(key) {
    localStorage.removeItem(key);
}

function emptyCart() {
localStorage.clear();
pageReload();
}

function pageReload() {
    document.location.reload();
}

function getItemQuantity(id) {
    let itemQuantity = 0;
    let storageValue = localStorage.getItem(id);
    if('null' != storageValue)  {
        let parsedValue = parseInt(storageValue);
        if (Number.isInteger(parsedValue)) {
            itemQuantity = parsedValue;
        }
    }
    return itemQuantity;
}


function formatPriceEuro(unformatedPrice) {
return new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR', minimumFractionDigits: 0}).format(unformatedPrice);
}