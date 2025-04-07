describe('Basic tests', () => {
  beforeEach('Visitar la página web', () => {
      cy.visit('https://commitquality.com/practice-general-components');
  });

  /* Ejercicio 1: Buttons */
  it('three buttons options', () => {
    cy.get('.practice-button').should('have.length',3).first('have.text','Click me').last('have.text','Right click me')
    cy.get('.practice-button').first('have.text','Click me');
    cy.get('[data-testid="basic-click"]').first('have.text','Click me');
  })

  it('One Click', () => {
    cy.get('.button-container p').should('not.exist');
    cy.get('[data-testid="basic-click"]').click();
    cy.get('.button-container p').should('exist')
      .and('be.visible')
      .and('have.text', 'Button clicked');
    })

  it('Double Click', () => {
    cy.get('.button-container p').should('not.exist');
    cy.get('[data-testid="double-click"]').dblclick();
    cy.get('[data-testid="double-click"]').next()
      .should('exist').and('be.visible')
      .and('have.text', 'Button double clicked');
    })

  it('Click on Right click me button', () => {
    cy.contains('.button-container p', 'Button right mouse clicked').should('not.exist');
    cy.get('[data-testid="right-click"]').rightclick();
    cy.wait(2000);
    cy.contains('.button-container p', 'Button right mouse clicked').should('exist')
      .and('be.visible')
      .and('have.text', 'Button right mouse clicked');
  }) 

  /* Ejemplo con nextAll y siblings 
  it.only('Click on every button and check contents in "p" with next, prev and siblings', () => {
    cy.get('[data-testid="basic-click"]').click().nextAll('p').first().should('have.text', 'Button clicked')
    cy.get('[data-testid="double-click"]').dblclick().next('p').should('contain', 'Button double clicked').prevAll('p').should('contain', 'Button clicked')
    cy.get('[data-testid="right-click"]').rightclick().siblings('p').should('have.length', 3).should('contain', 'Button right mouse clicked')
    cy.get('[data-testid="right-click"]').next('p').should('contain', 'Button right mouse clicked').prevAll('p').first().should('contain', 'Button double clicked')
  })*/


  /* Ejercicio 2: Radio Button */
  it('Radio Button: Nivel Fácil', () => {
    // 1. Verificamos que la cabecera contiene un encabezado con el texto "Radio buttons".
    cy.get('.radio-buttons-container').find('h2').should('have.text', ' Radio buttons');
    // 2. Verificar que no hay ningún elemento con el texto que contenga el texto 'clicked'
    cy.get('.radio-buttons-container').should('not.contain', 'clicked');
    // 3. Verificar que no hay ningún radio button "check"
    cy.get('[data-testid="option1"]').should('not.be.checked');
    cy.get('[data-testid="option2"]').should('not.be.checked');
    // 4. Pulsamos en el radio button 1, comprobamos que esta "check" y que contiene el texto correcto
    cy.get('[data-testid="option1"]').check().should('be.checked');
    cy.get('.radio-buttons-container p').should('have.text', 'option1 clicked');
  })

  it('Radio Button: Nivel Avanzado', () => {
    // 1. Verificamos que no hay ningún radio button marcado
    cy.get('.radio-buttons-container').find('[type="radio"]').should('exist');
    cy.get('.radio-buttons-container').find('[type="radio"]').should('not.be.checked');
    cy.get('.radio-buttons-container').find('p').should('not.exist');
    // 2. Verificamos que existe el h2 con el texto Radio buttons
    cy.get('.radio-buttons-container').find('h2.container-text').should('contain', 'Radio buttons');
    // 3. Activamos el primer radio button y comprobamos que tiene el texto correcto
    cy.get('.radio-buttons-container').find('[value="option1"]').check();
    cy.get('.radio-buttons-container').find('p').should('have.text', 'option1 clicked');
  })

  /* Ejercicio 3: Select */
  it('Select: Nivel Fácil', () => {
    // 1. Verificamos que existe el h2 con el texto Select an option
    cy.get('.dropdown-container').find('h2.container-text').should('contain', 'Select an option');
    // 2. Verificamos que exista el select, después que existe la opción 1 y por último la seleccionamos.
    cy.get('[data-testid="dropdown"] select').contains('Select an option')
      .should('exist')
      .and('be.visible');
      cy.get('[data-testid="dropdown"] select').find('option').contains('Option 1').should('exist');
      cy.get('[data-testid="dropdown"] select').select('option1');
    // 3. Verificamos que está seleccionada la opción correcta.
    cy.get('[data-testid="dropdown"] select').find('option:selected').should('have.value', 'option1'); 
  })

  it('Select: Nivel Avanzado', () => {
    // 1. Comprobar el texto y el valor del selector por defecto.
    cy.get('[data-testid="dropdown"] select').find('option:selected').should('have.text', 'Select an option').and('have.value', '');
    // 2. Verifica que la opción 2 existe y la selecciona
    cy.get('[data-testid="dropdown"] select').find('option').contains('Option 2').should('exist');
    cy.get('[data-testid="dropdown"] select').select('option2');
    // 3. Verifica que está seleccionada la opción con el valor correcto.
    cy.get('[data-testid="dropdown"] select').find('option:selected').should('have.value', 'option2'); 
  })

  /* Ejercicio 4: Checkboxes */
  /* Este nivel se ha hecho en lo más básico, sin comprobaciones adicionales. Tal cual pide el enunciado*/
  it('Checkboxes: Nivel Fácil', () => {
    // 1. Verificamos que existe el h2 con el texto Checkboxes
    cy.get('.checkbox-container').find('h2.container-text').should('have.text', ' Checkboxes');
    // 2. Activamos todos los checks
    cy.get('.checkbox-container').find('[type="checkbox"]').check()
    // 3. Verificamos que aparecen los textos correspondientes
    cy.contains('.checkbox-container', "Checkbox 1").should('exist').and('be.visible');
    cy.contains('.checkbox-container', "Checkbox 2").should('exist').and('be.visible');
    cy.contains('.checkbox-container', "Checkbox 3").should('exist').and('be.visible');
  })

  it('Checkboxes: Nivel Avanzado', () => {
    // 1. Verificamos que existan los checks y no estén marcados.
     cy.get('.checkbox-container').find('[type="checkbox"]')
     .should('exist')
     .and('be.visible')
     .and('not.be.checked');

    // 2. Verificamos no existan las p
    cy.get('.checkbox-container').find('p').should('not.exist')

    // 3. Verificamos que existe el h2 con el texto Checkboxes
    cy.get('.checkbox-container').find('h2.container-text').should('have.text', ' Checkboxes');

    // 4. Verificamos que existen las p después de pulsar en cada check
    cy.get('[data-testid="checkbox1"]').check().should('be.checked');
    cy.contains('.checkbox-container', "Checkbox 1").should('exist').and('be.visible');

    cy.get('[data-testid="checkbox2"]').check().should('be.checked');
    cy.contains('.checkbox-container', "Checkbox 2").should('exist').and('be.visible');

    cy.get('[data-testid="checkbox3"]').check().should('be.checked');
    cy.contains('.checkbox-container', "Checkbox 1").should('exist').and('be.visible');

    // 5. Desmarcar todos los checks
    cy.get('.checkbox-container').find('[type="checkbox"]').uncheck()

    // 6. Verificar que no existen las p
    cy.get('.checkbox-container').find('p').should('not.exist');
  })

  it.only('Checkboxes: Nivel Dificil', () => {
    // 1. Verificamos que existan los checks y no estén marcados.
     cy.get('.checkbox-container').find('[type="checkbox"]')
     .should('exist')
     .and('be.visible')
     .and('not.be.checked');

    // 2. Verificamos no existan las p
    cy.contains('[data-testid="checkbox1-label"]', "Checkbox 1").find('p')
    .should('not.exist');
    /* probar con el find con la p y que contentenga el texto.*/
    cy.contains('[data-testid="checkbox1-label"]', "Checkbox 2").next('p')
    .should('not.exist');

    cy.contains('[data-testid="checkbox1-label"]', "Checkbox 3").next('p')
    .should('not.exist');

    // 3. Verificamos que existe el h2 con el texto Checkboxes
    cy.get('.checkbox-container').find('h2.container-text').should('have.text', ' Checkboxes');

    // 4. Verificamos que existen las p después de pulsar en cada check
    cy.get('[data-testid="checkbox1"]').check().should('be.checked');
    cy.contains('[data-testid="checkbox1-label"]', "Checkbox 1").next('p')
    .should('exist')
    .and('be.visible')
    .and('have.text', 'Checkbox 1 checked');

    cy.get('[data-testid="checkbox2"]').check().should('be.checked');
    cy.contains('[data-testid="checkbox1-label"]', "Checkbox 2").next('p')
    .should('exist')
    .and('be.visible')
    .and('have.text', 'Checkbox 2 checked');

    cy.get('[data-testid="checkbox3"]').check().should('be.checked')
    cy.contains('[data-testid="checkbox1-label"]', "Checkbox 3").next('p')
    .should('exist')
    .and('be.visible')
    .and('have.text', 'Checkbox 3 checked');

    // 5. Desmarcar todos los checks
    cy.get('.checkbox-container').find('[type="checkbox"]').uncheck()

    // 6. Verificar que no existen las p
    cy.get('.checkbox-container').find('p').should('not.exist');
  })

});