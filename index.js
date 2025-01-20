//////////////1. Creating Products that we sell ///////////


export class item {

  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  displayOnConsole(){
    console.log(this.name)
    console.log(this.price)
  }

}

// Creating Items 

// const apple1 = new item ('Apple 1', 4.95)
// const apple2 = new item ('Apple 2', 4.95)
// const apple3 = new item ('Apple 3', 4.95)
// const orange = new item ('Orange', 3.99)


////////////2. Creating Array that contains  all the products we sell and functionalities ///////////
export class shoppingCart{

  constructor(){
    this.arrayCart = []
  }

  displayOnConsole(){
    console.log(this.arrayCart)
  }
// 3. Adding Items in Shopping Cart Array

  addItems(itemInCart){
    this.arrayCart.push(itemInCart);
    console.log(this.arrayCart)
  }

// 4. Calculate Total Price in UserCart 
// Using array.reduce method
// array.reduce brings callback ()=>, set initail from 0
// 

  totalPrice(){
    const priceInTotal = this.arrayCart.reduce((previousValue,currentValue)=>{
      return this.total = previousValue + currentValue.price;
    },0)
    // console.log(`Total Price in the cart is : $${priceInTotal} so far`);
    return priceInTotal;
  } 


// 5. Removing Item from UserCart
// Using Array.lastIndexOf brings ( searchItem ), search from last to start, if didn't find any return -1 
// Using Array.splice ( position , 1) 
// Array.splice ( position , 1) meaning delete 1 item
// Array.splice ( position , 1 , "Banana") meaning replace 1 item with Banana, from position, 
// Array.splice ( position , 0 , "Banana") meaning insert Banana in position, 
  removeItem(itemInCart){
    let itemIndex = this.arrayCart.lastIndexOf(itemInCart);
    this.arrayCart.splice(itemIndex,1);
  }

  
}

// const userCart = new shoppingCart;
// userCart.addItems(apple1);
// const outOfFunctionPrice  = userCart.totalPrice();
// console.log(`Here is outside of function $$$$ ${outOfFunctionPrice}`)

// User1 buying 2 Apples 1 Orange in his Cart 

// const userCart = new shoppingCart;

// userCart.addItems(apple1);
// userCart.addItems(apple2);
// userCart.addItems(orange);
// userCart.totalPrice();

// User2 buying 3 Apples, removing 1 Apple from the Cart

// const userCart2 = new shoppingCart;

// userCart2.addItems(apple1);
// userCart2.addItems(apple2);
// userCart2.addItems(apple3);
// userCart2.removeItem(apple1);
// userCart2.totalPrice();



//  class userCart{
//   constructor(){
//     this.userCart = [];
//     // console.log(this.userCart);

//   }
//   showOnConsole(){
//     console.log(this.userCart);
//   }
//   addProduct(product){
//     this.userCart.push(product);
//     console.log(this.userCart);
//   }
//   priceForUser(){
//     const price = this.userCart.reduce((previousValue,currentValue)=>{
//         return this.total = previousValue + currentValue.price;
//     },0)
//     console.log(`The total costs is $${price}.`);
//     return price;
//   }
//   changeOfMind(removedProduct){
//     const productIndex = this.userCart.lastIndexOf(removedProduct);
//     this.userCart.splice(productIndex,1);
    
//   }
// }

// const cart = new userCart;
// cart.showOnConsole();


// const avo = new item('Avo', 100);
// const fan = new item('fan', 200);
// const phone = new item ('phone', 30);
// cart.addProduct(avo); //+100
// cart.addProduct(fan); //+200
// cart.addProduct(phone); // +30
// cart.changeOfMind(fan); // -200
// cart.priceForUser(); // $130



