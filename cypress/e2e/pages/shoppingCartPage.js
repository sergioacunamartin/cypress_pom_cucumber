import { CommonPage } from "./commonPage";

// const inventoryItem = "inventory-item"

export class ShoppingCartPage extends CommonPage{


  checkInventoryItemNotExist () {
    cy.get('inventory-item').should('not.exist');
  }

  checkInventoryItemBeVisible () {
    cy.get('inventory-item').should('be.visible');
  }

// Se podría hacer con una constante para el invetory-item y además una sola función
//   checkInventoryItemStatus (assertion) {
//     cy.get(inventoryItem).should(assertion);
//   }
// 
}