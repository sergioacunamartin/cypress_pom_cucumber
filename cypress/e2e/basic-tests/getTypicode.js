describe('API Tests', () => {
    it('GET on endpoint /photos', () => {
      cy.request('https://jsonplaceholder.typicode.com/photos')
    });
});