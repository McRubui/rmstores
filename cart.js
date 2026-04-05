let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product){

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

alert("Added to cart");

}

function displayCart(){

let cartContainer = document.getElementById("cart-items");

cartContainer.innerHTML="";

cart.forEach(item =>{

cartContainer.innerHTML += `
<div>
<img src="${item.image}" width="80">
<h3>${item.name}</h3>
<p>$${item.price}</p>
</div>
`;

});

}

function getTotal(){

let total=0;

cart.forEach(item=>{
total+=item.price;
});

return total;

}
