import 'cypress-mochawesome-reporter/cucumberSupport';
import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

// Clases importadas
import { CommonPage} from "../pages/commonPage"

//Instancias de clase
let commonPage = new CommonPage();

Given("I visit {string}", (url) => {
  commonPage.visitLink(url);
 });

 Given("I check that the url doesn't include the endpoint {string}", (endpoint) => {
  commonPage.checkUrlnotInclude(endpoint);
 });

 Given("I check that the url include the endpoint {string}", (endpoint) => {
  commonPage.checkUrlInclude(endpoint);
 });
 
 Given("I click on the button with data-test {string}", (buttonByDataTest) => {
  commonPage.clickButtonByDataTest(buttonByDataTest);
 });

 Given("I click on the element with data-test {string}", (elementByDataTest) => {
  commonPage.clickElementByDataTest(elementByDataTest);
 });

 Given("I click on the button that contains the text {string}", (elementByContent) => {
  commonPage.clickElementByContent(elementByContent);
 });

 Given("I type in the text box with data test {string} the text {string}", (texBoxByDataText, text) => {
  commonPage.typeInTextBoxByDataTest(texBoxByDataText, text);
 });

 Given("I check that the element with data-test {string} should {string}", (elementByDataTest, assertion) => {
  commonPage.checkElementByDataTest(elementByDataTest, assertion);
});

Given("I check that the element with data-test {string} should contains {string}", (elementByDataTest, text) => {
  commonPage.checkElementContains(elementByDataTest, text);
});

// 3 funciones
Given("I check that body contain the text {string}", (text) => {
  commonPage.checkBodyTextContain(text);
});

Given("I check that body not contain the text {string}", (text) => {
  commonPage.checkBodyNotContain(text);
});

Given("I check that the element with class {string} should exist", (text) => {
  commonPage.checkElementByClass(text);
});

// Accesibilidad

Given('I test the accesibility in all the screen', () => {
  commonPage.testAccesibilityInScreen()
})

Given('I test the accesibility on the element with locator {string}', (elementLocator) => {
  commonPage.testAccesibilityOnElement(elementLocator)
})