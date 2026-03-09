async function loadProducts(){

const res = await fetch("data/products.json")

const products = await res.json()

let grid = document.getElementById("products")

products.forEach(p => {

grid.innerHTML += `

<div class="card">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<p>Stock: ${p.stock}</p>

<button onclick="addCart('${p.name}',${p.price})">

Add to Cart

</button>

</div>

`

})

}