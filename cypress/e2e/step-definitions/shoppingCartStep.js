import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { ShoppingCartPage} from "../pages/shoppingCartPage"

//Instancias de clase
let shoppingCartPage = new ShoppingCartPage();