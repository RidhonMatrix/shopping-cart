function getQuantity(parentId) {
   const quantity = document.querySelector(parentId + " input").value;
   const quantityNumber = parseFloat(quantity);
   return quantityNumber;
}

function getPrice(parentId) {
   const price = document.querySelector(parentId + " .price").innerText;
   const priceNumber = parseFloat(price);
   return priceNumber;
}

function setQuantity(parentId, value) {
   document.querySelector(parentId + " input").value = value;
}

function setPrice(parentId, value) {
   document.querySelector(parentId + " .price").innerText = value;
}
function setSubTotal(value) {
   document.getElementById('sub-total').innerText = value;
}
function calculateTax(num) {
   fivePercent = (num * 5) / 100;
   return fivePercent;
}
function cartPlusMinusBtn(parentId, obj) {
   const minusBtn = document.querySelector(parentId + " .minusBtn");
   minusBtn.addEventListener('click', function () {
      if (obj.quantity > 1) {

         obj.quantity -= 1;
         setQuantity(parentId, obj.quantity);

         obj.totalPrice -= obj.price;
         setPrice(parentId, obj.totalPrice);

         subTotal -= obj.price;
         setSubTotal(subTotal);


         setTax(calculateTax(subTotal));
         finalTotal = subTotal + calculateTax(subTotal);
         setTotal(finalTotal);
      }
   })

   const plusBtn = document.querySelector(parentId + " .plusBtn");
   plusBtn.addEventListener('click', function () {

      obj.quantity += 1;
      setQuantity(parentId, obj.quantity);

      obj.totalPrice += obj.price;
      setPrice(parentId, obj.totalPrice);

      subTotal += obj.price;
      setSubTotal(subTotal);

      setTax(calculateTax(subTotal));
      finalTotal = subTotal + calculateTax(subTotal);
      setTotal(finalTotal);

   })
}
function setTotal(value) {
   document.getElementById('final-total').innerText = value;
}
function setTax(value) {
   document.getElementById('tax').innerText = value;
}


var iphone = {
   price: getPrice("#iphone"),
   quantity: getQuantity("#iphone"),
   totalPrice: getPrice("#iphone"),
   totalTax: 0
};
var phoneCase = {
   price: getPrice("#phoneCase"),
   quantity: getQuantity("#phoneCase"),
   totalPrice: getPrice("#phoneCase"),
   totalTax: 0
};
var subTotal = iphone.totalPrice + phoneCase.totalPrice;
var tax = calculateTax(subTotal);
var finalTotal = tax + subTotal;
cartPlusMinusBtn("#iphone", iphone);
cartPlusMinusBtn("#phoneCase", phoneCase);


let totalItems = ["iphone", "phoneCase"];

function resetCalculation(obj){
   subTotal-=obj.totalPrice;
   setSubTotal(subTotal);
   tax=calculateTax(subTotal);
   setTax(tax);
   finalTotal=subTotal+tax;
   setTotal(finalTotal);
}

function removeItem(parent, item) {
   if (item.id== "iphone"){
      parent.removeChild(item);
      resetCalculation(iphone);
      totalItems.shift();
   }
   else if (item.id == "phoneCase") {
      parent.removeChild(item);
      resetCalculation(phoneCase);
      totalItems.pop();
   }

}

//remove button
document.getElementById("main-cart").addEventListener('click', function (event) {
   let parent = this;
   let item = event.target.parentNode.parentNode.parentNode;
   removeItem(parent, item);

   // removeIphone();
   // removePhoneCase();

   // let temp=event.target.parentNode.parentNode.parentNode;
   //  console.log(temp.id);
   //  if(temp.id=="iphone" || temp.id=="phoneCase"){
   //     console.log('!!!');
   //     this.removeChild(event.target.parentNode.parentNode.parentNode);
   //  }
   //  this.removeChild(event.target.parentNode.parentNode);
   //  event.target.parentNode.removeChild(event.target);
})

