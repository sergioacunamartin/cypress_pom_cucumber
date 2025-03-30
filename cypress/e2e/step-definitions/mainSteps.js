import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { MainPage} from "../pages/mainPage"
import { CommonPage } from "../pages/commonPage";

//Instancias de clase
let mainPage = new MainPage();

Given("I check url include the endpoint inventory.html", () => {
  mainPage.checkUrlMainPage();
 });

Given("I check that the product at position {string} in the list contains {string}", (position, text) => {
 mainPage.checkElementByPosition('inventory-item', position, text);
});

Given("I sort the products selecting the option {string}", (option) => {
  mainPage.selectSortOption('product-sort-container', option);
});



