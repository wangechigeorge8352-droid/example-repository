function addProduct(){

let name=document.getElementById("productName").value
let price=document.getElementById("price").value
let stock=document.getElementById("stock").value

let item = name+" - $"+price+" - stock:"+stock

document.getElementById("inventory").innerHTML+=`<p>${item}</p>`

}