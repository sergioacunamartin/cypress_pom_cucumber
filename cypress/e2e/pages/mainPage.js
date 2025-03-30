import { CommonPage } from "./commonPage";

export class MainPage extends CommonPage{

  checkUrlMainPage () {
    cy.url().should('include', 'inventory.html');
  }

  // Ejercicio orden por precio
  checkElementByPosition(productItem, position, text) {
    let element;
    if (position === 'first') {
      element = this.getElementByDataTest(productItem).first().should('contain', text);
    } else if (position === 'last') {
      element = this.getElementByDataTest(productItem).last().should('contain', text);
    }
  }

  selectSortOption(elementByDataTest, option) {
    this.getElementByDataTest(elementByDataTest).select(option);
  }

}