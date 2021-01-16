(async () => {
        let total = 0;
        let quantity = 0;

        for (var i = 0; i < localStorage.length; i++){
            const qty = localStorage.getItem(localStorage.key(i));
            const id = localStorage.key(i);
            const url = '/api/furniture/'+id;
            const item = await fetch(url)
               .then(response => response.json());
                 total += createCartItem(item, qty);
              quantity += parseInt(qty);
        }

         document.getElementById("item-list-total").innerHTML = formatPriceEuro(total);
         document.getElementById("item-list-qty").innerHTML = quantity;

})();

document.getElementById("user-form").addEventListener("submit", function(e) {e.preventDefault(); submitOrder();});

function submitOrder() {

    const url = '/api/furniture/order';

    let  order = generateOrder();

    fetch(
        url, {
            method: 'post',
            body: JSON.stringify(order),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        }
    )
       .then(response =>  response.json())
       .then(json => displayOrderSuccess(json))
       .catch(err => displayOrderFailed(err));

};

function generateOrder() {

    let productsList = [];
    for (var i = 0; i < localStorage.length; i++){
        const id = localStorage.key(i);
        productsList.push(id);
    }

    let  order = {
        contact : {
            "firstName": document.getElementById("firstName"),
            "lastName": document.getElementById("lastName"),
            "address": document.getElementById("address"),
            "city": document.getElementById("city"),
            "email": document.getElementById("email")
        },
        products : productsList
    };
    return order;
}

function displayOrderFailed(err) {
document.getElementById("order-status").innerHTML = "Order failed.";
console.log(err);
}

function displayOrderSuccess(json) {

document.getElementById("submitOrderButton").setAttribute("disabled", "true");
document.getElementById("user-fields").setAttribute("disabled", "true");
document.getElementById("order-number").innerHTML = "Order number : "+json.orderId;
document.getElementById("order-status").innerHTML = "Order complete, thank you for your purchase.";
console.log(json);
}

function createCartItems(items) {
   for(let item of items) {
     createCartItem(item);
     }
 }

 function createCartItem(item, qty) {
     let tableTemplate = document.getElementById("item-table");

     let tableClone = tableTemplate.cloneNode(true)

     tableClone.removeAttribute("style");
     tableClone.getElementsByClassName("name")[0].innerHTML = item.name;
     tableClone.getElementsByClassName("price")[0].innerHTML = formatPriceEuro(item.price);
     tableClone.getElementsByClassName("qty")[0].innerHTML = qty;
     tableClone.getElementsByClassName("total")[0].innerHTML = formatPriceEuro(qty*item.price);
     document.getElementById("item-list").appendChild(tableClone);

    return qty*item.price;
 }