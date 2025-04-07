describe('Form exercise', () => {
  beforeEach('Visitar la página web', () => {
      cy.visit('https://commitquality.com/add-product');
  });
  /*"Happy Path" se refiere a la ruta de ejecución en la que una aplicación 
  funciona exactamente como se espera, sin errores ni escenarios excepcionales.
  En otras palabras, se trata de probar el flujo principal y más común de una funcionalidad,
  asegurándose de que los usuarios puedan completar su objetivo sin problemas. Ejemplo:

  Supongamos que estamos probando un formulario de inicio de sesión. El Happy Path sería:

  Abrir la página de inicio de sesión.
  Ingresar credenciales correctas (usuario y contraseña válidos).
  Hacer clic en el botón de "Iniciar sesión".
  Ser redirigido correctamente al dashboard del usuario.
  */
  it('Nivel fácil (Happy path)', () => {
    // 1. Verificamos que existe un h1 con el texto Add Product
    cy.get('.container').find('h1')
      .should('exist')
      .and('be.visible')
      .and('have.text', "Add Product");
    // 2. Verificar que estamos en la url adecuada para añadir el producto
    cy.url().should('include','add-product'); 
    // 3. Limpiar todos los inputs de tipo texto y añadir un nuevo producto
    cy.get('input[type="text"]').each(($input) => {
      cy.wrap($input).clear();
    });
    cy.get('[data-testid="product-textbox"]').type('Nuevo Producto');
    cy.get('[data-testid="price-textbox"]').type(31);
    cy.get('[data-testid="date-stocked"]').type('2025-01-01')
    cy.get('[data-testid="submit-form"]').click()
    
    // 4. Comprobar que la url no contiene el end point "add-product"
    cy.url().should('not.include','add-product'); 

    // 5. Comprobar que se ha añadido el producto correctamente
    cy.get('.product-list-table').find('[data-testid^="product-row-"]').first()
      .within(() => {
      cy.get('td[data-testid="id"]').should('have.text', '12');
      cy.get('td[data-testid="name"]').should('have.text', 'Nuevo Producto'); 
      cy.get('td[data-testid="price"]').should('have.text', '31');
      cy.get('td[data-testid="dateStocked"]').should('have.text', '2025-01-01');
    });  
  })

  it('Nivel avanzado (Check errors)', () => {
    // 1. Comprobar el mensaje de error de name + extra pertenecer al mismo div
    cy.get('[data-testid="product-textbox"]').clear().type('R');
    // cy.get('[data-testid="product-textbox"]').blur() // Simula la perdida del foco
    cy.get('[data-testid="price-textbox"]').click(); // Me parece mejor esta forma. Es más natural.
    cy.get('.form-group').contains('label', 'Name')
      .siblings('.error-message')
      .should('have.text', "Name must be at least 2 characters.");
    // 2. Comprobar el mensaje de error de price de dos formas + extra pertenecer al mismo div
    cy.get('[data-testid="price-textbox"]').clear();
    cy.get('[data-testid="date-stocked"]').click();
    cy.get('.form-group').contains('label', 'Price')
      .siblings('.error-message')
      .should('be.visible')
      .should('have.text', "Price must not be empty and within 10 digits");

    cy.get('[data-testid="price-textbox"]').type(12345678941);
    cy.get('[data-testid="date-stocked"]').click();
    cy.get('.form-group').contains('label', 'Price')
      .siblings('.error-message')
      .should('be.visible')
      .should('have.text', "Price must not be empty and within 10 digits");
  })

  it('Nivel avanzado (Check errors)', () => {
    // 1. Comprobar el mensaje de error de name + extra pertenecer al mismo div
    cy.get('[data-testid="product-textbox"]').clear().type('R');
    // cy.get('[data-testid="product-textbox"]').blur() // Simula la perdida del foco
    cy.get('[data-testid="price-textbox"]').click(); // Me parece mejor esta forma. Es más natural.
    cy.get('.form-group').contains('label', 'Name')
      .siblings('.error-message')
      .should('be.visible')
      .should('have.text', "Name must be at least 2 characters.");
    // 2. Comprobar el mensaje de error de price de dos formas + extra pertenecer al mismo div
    cy.get('[data-testid="price-textbox"]').clear();
    cy.get('[data-testid="date-stocked"]').click();
    cy.get('.form-group').contains('label', 'Price')
      .siblings('.error-message')
      .should('be.visible')
      .should('have.text', "Price must not be empty and within 10 digits");

    cy.get('[data-testid="price-textbox"]').type(12345678941);
    cy.get('[data-testid="date-stocked"]').click();
    cy.get('.form-group').contains('label', 'Price')
      .siblings('.error-message')
      .should('be.visible')
      .should('have.text', "Price must not be empty and within 10 digits");

    // 3. Comprobar el mensaje de error de fecha + extra pertenecer al mismo div
    cy.get('[data-testid="date-stocked"]').clear();
    cy.get('.form-group').contains('label', 'Price')
      .siblings('.error-message')
      .should('be.visible')
      .should('have.text', "Price must not be empty and within 10 digits");
    // Mensaje de error fecha futura
    cy.get('[data-testid="date-stocked"]').type('2099-01-01');
    cy.get('[data-testid="submit-form"]').click();
    cy.get('.form-group').contains('label', 'Date Stocked')
      .siblings('.error-message')
      .should('be.visible')
      .should('have.text', "Date must not be in the future.");

    // 4. Comprobar el mensaje de error Please fill in all fields
    cy.reload();
    cy.get('[data-testid="submit-form"]').click();
    cy.get('[data-testid="fillin-all-fields-validation"]')
    .should('be.visible')
    .should('have.text', "Please fill in all fields");
  })

  it('Nivel difícil (fixture and table filter)', () => {
    cy.fixture('formProductExercise').as('dataProducts');
    // 1. Comprobar que el placeholder de name y price es el correcto
    cy.get('[data-testid="product-textbox"]').should('have.attr', 'placeholder', 'Enter a product name');
    cy.get('[data-testid="price-textbox"]').should('have.attr', 'placeholder', 'Enter a price');

    // 2. Iterar sobre los 3 objetos del json y añadirlos
    cy.get('@dataProducts').then((products) => {
      products.forEach((product) => {
        cy.get('[data-testid="product-textbox"]').clear().type(product.name);
        cy.get('[data-testid="price-textbox"]').clear().type(product.price);
        cy.get('[data-testid="date-stocked"]').type(product.date);
        cy.get('[data-testid="submit-form"]').click();
        cy.go('back');
      });
    })
    
    // 3. Comprobar que aparece el nombre de los 3 productos iterando sobre los objetos del json
    cy.get('[data-testid="navbar-products"]').click()
    cy.get('.product-list-table').should('be.visible')
    cy.get('@dataProducts').then((products) => {
    products.forEach((product) => {
        cy.get('.product-list-table').find('[data-testid="name"]')
        .should('contain', product.name)
      })
    })

  })

});