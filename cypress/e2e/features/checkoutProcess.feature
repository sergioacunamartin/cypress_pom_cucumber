Feature: Checkout Process

  Background: Visit and login with valid credencials
    Given I visit "https://www.saucedemo.com/"
    When I login with valid user and password

  Scenario: "Complete checkout process with two products in the cart"
    Given I Add to the cart the product "Sauce Labs Backpack"
    And I Add to the cart the product "Sauce Labs Onesie"
    And I go to cart page
    And I check "Sauce Labs Backpack" appears in the cart page
    And I check "Sauce Labs Onesie" appears in the cart page
    And I check that the number 2 appears in the shopping cart badge
    When I click on the button that contains the text "Checkout"
    And I check that the url include the endpoint "checkout-step-one.html"
    And I fill correctly the formulary
    When I click on the button that contains the text "Continue"
    And I check that the url include the endpoint "checkout-step-two.html"
    And I check that the products appears with the correct name and price
    When I click on the button that contains the text "Finish"
    Then I check that the url include the endpoint "checkout-complete"
    And I check that body contain the text "Thank you for your order!"
    And I click on the button that contains the text "Back Home"
    And I check that the element with data-test "shopping-cart-badge" should "not.exist"