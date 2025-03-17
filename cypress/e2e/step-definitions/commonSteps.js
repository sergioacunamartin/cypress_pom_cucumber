import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor"; 

// Clases importadas 
import { CommonPage} from "../pages/commonPage"

//Instancias de clase 
let commonPage = new CommonPage();

// El lenguaje debe reflejar lo que hacemos por detrás. En este
// caso "I visit"...
// CTRL + click izquierdo sobre la función te lleva al sitio donde
// está la función
Given("I visit {string}", (url) => { 
    commonPage.visitLink(url); 
  }); 