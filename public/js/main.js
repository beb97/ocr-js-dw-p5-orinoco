
class Cart {
  constructor() {

   let storageValue = JSON.parse(localStorage.getItem("items"));
   if (storageValue == null) {
    storageValue = [];
  }

  this.items = storageValue;
}

setItem(id) {
  this.setItemAndQty(id, 1);
}

setItemAndQty(id, qty) {
  const index = this.getItemIndex(id);

  if(index == -1) {
    this.createItem(id, qty);
  } else {
    this.updateItem(id, qty);
  }

  this.toStorage();
}

createItem(id, qty) {
  const item = {id:id, qty:qty};
  this.items.push(item);
}

updateItem(id, qty) {
  let newQty = this.getItemQty(id) + qty;
  if (newQty < 1) {
    this.removeItem(id);
  } else {
    this.setItemQty(id, newQty);
  }
}

removeItem(id) {
  const index = this.getItemIndex(id);
  if(index >-1) {
   this.items.splice(index,1);
 }
 this.toStorage();
}

emptyCart() {
  this.items=[];
  this.toStorage();
}

getItem(id) {
  let item = null;
  const index = this.getItemIndex(id);
  if(index >-1) {
    item = this.items[index];
  }
  return item;
}

getItemIndex(itemId) {
  let index = -1;
  this.items.forEach( (value, i, array) => {
   if(value.id == itemId) {
    index = i;
  }
} )
  return index;
}

getItemQty(itemId) {
  let qty = 0;
  const index = this.getItemIndex(itemId);
  if(index >-1 ) {
    qty = this.items[index].qty;
  }
  return qty;
}


setItemQty(itemId, qty) {
  const index = this.getItemIndex(itemId);
  if(index >-1 ) {
    this.items[index].qty = qty;
  }
}

countItems() {
  return this.items.length;
}

toStorage() {
 localStorage.setItem("items", JSON.stringify(this.items))
}
}

var cart = new Cart();

( () => {

  const itemsCount = countItems();
  if (itemsCount > 0) {
   document.getElementById("cart-count").innerHTML = "("+itemsCount+")";
 }

 let logo = "";
 switch (getCurrentStore()) {
  case 'furniture' :
  logo = "fa-couch";
  break;
  case 'cameras':
  logo = "fa-camera";
  break;
  case 'teddies' :
  logo = "fa-paw";
  break;
}
document.getElementById("store-logo").classList.add(logo);


} )();

function changeStore() {
  const store = document.getElementById("store-select").value;
  emptyCart();
  localStorage.setItem("store",store)
  console.log(store);
  pageReload();
}



function getCurrentStore() {
  const store = localStorage.getItem("store");
  return store;
}

function countItems() {
  let quantity = 0;

  for(let item of cart.items) {
          quantity += item.qty;
  };

  return quantity;
}

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
  cart.setItem(button.getAttribute("product"));
  pageReload();
}

function removeOneFromCart(button) {
  cart.setItemAndQty(button.getAttribute("product"),-1);
  pageReload();
}

function addToCartQuantity(id, qty) {
  cart.setItem(id, qty);
  pageReload();
}

function removeFromCart(button) {
 const itemId = button.getAttribute("product");
 cart.removeItem(itemId);
 pageReload();
}


function emptyCart() {
  cart.emptyCart();
  pageReload();
}

function pageReload() {
  document.location.reload();
}

function formatPriceEuro(unformatedPrice) {
  return new Intl.NumberFormat('fr-FR', {style: 'currency', currency: 'EUR', minimumFractionDigits: 0}).format(unformatedPrice);
}