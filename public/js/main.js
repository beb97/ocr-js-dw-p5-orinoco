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
//    return "item/";
    return "/item/?id="+id;
}

function generateAddToCartLink(id) {
    return "addToCart('"+id+"');";
}

function generateRemoveFromCartLink(id) {
    return "removeFromCart('"+id+"');";
}

function addToCart(id) {
    localStorage.setItem(id, getItemQuantity(id)+1);
    pageReload();
}

function removeFromCart (id) {
   localStorage.removeItem(id);
    pageReload();
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