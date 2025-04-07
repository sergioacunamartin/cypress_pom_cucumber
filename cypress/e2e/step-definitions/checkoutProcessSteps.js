import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { CheckOut} from "../pages/checkoutProcess"

//Instancias de clase
let checkOut = new CheckOut();

Given("I Add to the cart the product {string}", (productName) => {
  checkOut.addProductToCart(productName);
 });

Given("I go to cart page", () => {
    checkOut.goToCartPage();
});

Given("I check {string} appears in the cart page", (productName) => {
    checkOut.checkProductCart(productName);
});

Given("I check that the number {int} appears in the shopping cart badge", (cartBadgeNumber) => {
    checkOut.checkCartBadgeNumber(cartBadgeNumber);
});

Given("I fill correctly the formulary", () => {
    checkOut.fillCheckOutForm();
});

Given("I check that the products appears with the correct name and price", () => {
    const expectedProducts = [
      { name: "Sauce Labs Backpack", price: "$29.99" },
      { name: "Sauce Labs Onesie", price: "$7.99" }
    ];
  
    expectedProducts.forEach(product => {
      checkOut.checkProductNameAndPrice(product.name, product.price);
    });
  });