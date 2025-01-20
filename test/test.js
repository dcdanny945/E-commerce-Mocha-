import { expect } from 'chai';
import { item, shoppingCart } from '../index.js'; 

describe('User Shopping Cart', () => {
  it('Total Price after adding 2 Apples and 1 Orange', () => {

    // User 1 starting with empty Shopping Cart 
    const userCart = new shoppingCart();

    // Creating Items 
    const apple1 = new item ('Apple 1', 4.95)
    const apple2 = new item ('Apple 2', 4.95)
    const orange = new item ('Orange', 3.99)
    
    // Adding Items in Cart
    userCart.addItems(apple1);
    userCart.addItems(apple2);
    userCart.addItems(orange);
    userCart.displayOnConsole();
    
    // Mocha & Chai checking result 
    expect(userCart.totalPrice()).to.equal(13.89); 
  });

  it('Total Price after adding 3 Apples and removing 1 Apple', () => {

    // User 2 starting with empty Shopping Cart 
    const userCart = new shoppingCart();

    // Creating Items 
    const apple1 = new item ('Apple 1', 4.95)
    const apple2 = new item ('Apple 2', 4.95)
    const apple3 = new item ('Apple 3', 4.95)
    
    // Adding Items in Cart
    userCart.addItems(apple1);
    userCart.addItems(apple2);
    userCart.addItems(apple3);
    userCart.removeItem(apple3);
    userCart.displayOnConsole();

    // Mocha & Chai checking result
    expect(userCart.totalPrice()).to.equal(9.90);


  });
});


