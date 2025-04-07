Feature: Main Test Suite

 Background:
 Given I visit "https://www.saucedemo.com/"
 Then I login with valid user and password

Scenario: Verify that I can go to product details without add the product to the cart
  Given I check that the element with data-test "title" should contains "Products"
  And I check that the element with data-test "shopping-cart-badge" should "not.exist"
  And I check that the element with data-test "inventory-list" should "be.visible"
  When I click on the button that contains the text "Sauce Labs Bolt T-Shirt"
  Then I check that the url include the endpoint "?id="
  And I check that the element with data-test "back-to-products" should "be.visible"
  And I check that the element with data-test "add-to-cart-sauce-labs-bolt-t-shirt" should "not.exist" 
  And I click on the button that contains the text "Back to products"
  And I check that the url doesn't include the endpoint "?id="
  And I check that the element with data-test "back-to-products" should "not.exist"
  And I check that the element with data-test "add-to-cart-sauce-labs-bolt-t-shirt" should "be.visible" 
  And I check that the element with data-test "shopping-cart-badge" should "not.exist"
  And I click on the element with data-test "shopping-cart-link"
  And I check that the url include the endpoint "cart.html"
  And I check that the element with data-test "title" should contains "Your Cart"
  And I check that body not contain the text "Sauce Labs Bolt T-Shirt"
@smoke
Scenario: Verify sorting by price
  Given I check that the element with data-test "active-option" should contains "Name (A to Z)"
  And I check that the product at position "first" in the list contains "Sauce Labs Backpack"
  And I check that the product at position "first" in the list contains "29.99"
  And I check that the product at position "last" in the list contains "Test.allTheThings() T-Shirt (Red)"
  And I check that the product at position "last" in the list contains "15.99"
  When I sort the products selecting the option "Price (low to high)"
  And I check that the product at position "first" in the list contains "Sauce Labs Onesie"
  Then I check that the product at position "first" in the list contains "7.99"
  And I check that the product at position "last" in the list contains "Sauce Labs Fleece Jacket"
  Then I check that the product at position "last" in the list contains "49.99"
  

