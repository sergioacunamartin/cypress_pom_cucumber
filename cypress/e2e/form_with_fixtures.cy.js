describe('Formulario', () => {
  beforeEach('Visit the url for commitquality',() => {
    cy.visit('https://commitquality.com/add-product');
    cy.fixture('example').as('exampleDdata')
    cy.fixture('array').as('dataArray')
  })


  it('fills out the form with data', () => {
    cy.get('[data-testid="product-textbox"]').clear().type('name');
    cy.get('[data-testid="price-textbox"]').clear().type(1);
    cy.get('[data-testid="date-stocked"]').type('1983-12-21');
  });

  it('fills out the form with data entry from fixture',() => {
    cy.fixture('example').then((data) => {
      cy.get('[data-testid="product-textbox"]').clear().type(data.name);
      cy.get('[data-testid="price-textbox"]').clear().type(data.price);
      cy.get('[data-testid="date-stocked"]').type(data.date);
    });
  })

  it('fills out the form with data entry from fixture using alias',() => {
    cy.get('@exampleDdata').then((data) => {
      cy.get('[data-testid="product-textbox"]').clear().type(data.name);
      cy.get('[data-testid="price-textbox"]').clear().type(data.price);
      cy.get('[data-testid="date-stocked"]').type(data.date);
    });
  })

  it.only('fills out the form with data entry from array in fixture by position',() => {
    cy.get('@dataArray').then((dataArray) => {
      cy.get('[data-testid="product-textbox"]').clear().type(dataArray[2].name);
      cy.get('[data-testid="price-textbox"]').clear().type(dataArray[2].price);
      cy.get('[data-testid="date-stocked"]').type(dataArray[2].date);
    });
  })

  it('fills out the form with data entry from array in fixture by position using a const',() => {
    cy.get('@dataArray').then((dataArray) => {
      const dataByPosition = dataArray[3]
      cy.get('[data-testid="product-textbox"]').clear().type(dataByPosition.name);
      cy.get('[data-testid="price-textbox"]').clear().type(dataByPosition.price);
      cy.get('[data-testid="date-stocked"]').type(dataByPosition.date);
    });
  })

  it('fills out the form with data entry from array in fixture by key',() => {
    cy.get('@dataArray').then((dataArray) => {
      const dataByKey = dataArray.find(item => item.name === 'Pablo');
      cy.get('[data-testid="product-textbox"]').clear().type(dataByKey.name);
      cy.get('[data-testid="price-textbox"]').clear().type(dataByKey.price);
      cy.get('[data-testid="date-stocked"]').type(dataByKey.date);
    });
  })

  it('fills out the form for each data entry from fixture', function() {
    cy.get('@dataArray').then((dataArray) => {
      dataArray.forEach((data) => {
        cy.get('[data-testid="product-textbox"]').clear().type(data.name);
        cy.get('[data-testid="price-textbox"]').clear().type(data.price);
        cy.get('[data-testid="date-stocked"]').type(data.date);
        cy.get('[data-testid="submit-form"]').click()
        cy.get('[data-testid="navbar-addproduct"]').click()
      });
    });
  })

})