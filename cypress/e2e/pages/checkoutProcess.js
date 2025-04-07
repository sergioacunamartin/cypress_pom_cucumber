import { CommonPage } from "./commonPage";

const dataTestCartItem = "inventory-item";
const dataTestCartItemPrice = "inventory-item-price";
const dataTestCartBadget = "shopping-cart-badge";
const inputTestFirstName = "firstName";
const inputTestLastName = "lastName";
const inputTestPostalCode = 'postalCode';

export class CheckOut extends CommonPage {

    // Función para añadir cualquier producto
    addProductToCart (productName) {
        const kebabName = productName.toLowerCase().replaceAll(' ', '-')
        const dataTest = `add-to-cart-${kebabName}`
        this.clickButtonByDataTest(dataTest)
    }

    goToCartPage () {
        this.clickElementByDataTest('shopping-cart-link');
        this.checkUrlInclude('cart.html');
    }

    checkProductCart (productName) {
        this.checkElementContains(dataTestCartItem, productName);
    }

    checkCartBadgeNumber (cartBadgeNumber) {
        this.checkElementByDataTest('shopping-cart-badge', 'be.visible');
        this.checkElementContains(dataTestCartBadget, cartBadgeNumber);
    }

    fillCheckOutForm () {
        this.checkElementByDataTest(inputTestFirstName, 'be.visible');
        this.typeElementByDataTest(inputTestFirstName, 'Sergio');
        this.checkElementByDataTest(inputTestLastName, 'be.visible');
        this.typeElementByDataTest(inputTestLastName, 'Acuña');
        this.checkElementByDataTest(inputTestPostalCode, 'be.visible');
        this.typeElementByDataTest(inputTestPostalCode, 29003);
    }

    checkProductNameAndPrice(productName, productPrice) {
        this.checkElementContains(dataTestCartItem, productName);
        this.checkElementContains(dataTestCartItemPrice, productPrice);
      }

    
}