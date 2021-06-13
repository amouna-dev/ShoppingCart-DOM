
var qtFields = document.getElementsByClassName("num");


// Accessing individual quantity fields
for(let i = 0; i < qtFields.length; i++){
    qtFields[i].value = 1;
    qtFields[i].addEventListener('change', totalCost);
            
}


//Calculate total price of item
function totalCost(event){
var sum = 1;
let quantity = event.target;
let row = quantity.parentElement.parentElement;
//qtParent = quantity.parentNode.parentNode;

let price = row.getElementsByClassName('price')[0];
let total = row.getElementsByClassName('full-price')[0];
let priceContent = parseFloat(price.innerHTML) ;

  
sum = quantity.value * priceContent;
sum = Math.round(sum * 100) / 100; 
total.innerHTML =  sum.toFixed(2) ;

ChangeSubTotal();

}
// update the Subtotal of items
function ChangeSubTotal(){

let total = 0;
let subTotal = document.getElementById('total');
let totals = document.getElementsByClassName('full-price');

    for(let i = 0; i < totals.length; i++){
      var  prices = parseFloat(totals[i].innerHTML);
        total += prices;
    }

    total = Math.round(total * 100) / 100;
    subTotal.innerHTML = total.toFixed(2);


}

// btnRemove1.addEventListener('click', removeitem)
//Remove items From the table
function removeitem(obj) {

    obj.parentNode.parentNode.parentNode.parentNode.removeChild(obj.parentNode.parentNode.parentNode);

    ChangeSubTotal()
}

var icon = document.getElementsByClassName("fa-heart");
for(let i = 0; i < icon.length; i++){
   icon[i].addEventListener('click', changeColor);
  }

// Like/Dislike items
function changeColor(e) {
    var obj = e.target;
    console.log(obj.style.color);
    if(obj.style.color == "" || obj.style.color == "lightgray" ){
      obj.style.color = "red";  
    }
    
    else{
       obj.style.color = "lightgray"; 
    }
    
}
