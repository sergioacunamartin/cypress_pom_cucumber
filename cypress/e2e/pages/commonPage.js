export class CommonPage {

  visitLink(url) {
  cy.visit(url);
  }
  
  checkUrlnotInclude(endpoint) {
    cy.url().should('not.include', endpoint);
  }

  checkUrlInclude(endpoint) {
    cy.url().should('include', endpoint);
  }

  clickButtonByDataTest(buttonByDataTest) {
    cy.get(`[data-test="${buttonByDataTest}"]`).click();
  }

  typeInTextBoxByDataTest (texBoxByDataText, text) {
    cy.get(`[data-test="${texBoxByDataText}"]`).type(text);
   }

  getElementByDataTest (elementByDataTest) {
   return cy.get(`[data-test="${elementByDataTest}"]`)
  }

  getElementByType(elementType) {
   return cy.get(elementType);
  }

   // Better practices

   checkElementContains (elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).should('contain', text)
   }

   checkElementNotContains (elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).should('not.contain', text)
   }

  clickElementByDataTest(elementByDataTest) {
    this.getElementByDataTest(elementByDataTest).click()
   }

  typeElementByDataTest(elementByDataTest, text) {
    this.getElementByDataTest(elementByDataTest).type(text)
   }

  clickElementByContent (elementByText) {
    cy.contains(elementByText).click()
   }

   clickButtonByText (text) {
    cy.get('inputbutton').contain(text).click()
   }

   // Ejercicios
   checkElementByDataTest(elementByDataTest, assertion) {
    this.getElementByDataTest(elementByDataTest).should(assertion)
   }

   // Funciones Body y Class
   checkBodyTextContain(text) {
    cy.get('body').should('contain', text)
   }

   checkBodyNotContain(text) {
    cy.get('body').should('not.contain', text);
   }

   checkElementByClass(elementByClass) {
    cy.get(`.${elementByClass}`);
   }


  // Accesibilidad 
  
  /// Función para testear accesibilidad
  testAccesibilityInScreen () {
    cy.injectAxe();
    cy.checkA11y();
  }

  testAccesibilityOnElement (elementLocator) {
    cy.injectAxe();
    cy.checkA11y(elementLocator)
  } 
 }