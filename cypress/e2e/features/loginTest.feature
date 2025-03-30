#Para comentar en un archivo .feature se hace con este símbolo #
#Esto es la descripción de la batería de test contenida en este archivo
Feature: Login test suite

Background:
#Esto es equivalente al beforeEach
 Given I visit "https://www.saucedemo.com/"

Scenario: Check that the element with data-test id login-credentials contains all accepted usernames
  Given I check that the element with data-test "login-credentials" should "be.visible"
  Then I verified that all the accepted usernames are in the element with data-test "login-credentials"

#Username is required
Scenario: Verify that the message "Username is required" appears when submitting without a username or password.
  Given I check that the element with data-test "error" should "not.exist"
  When I click on the button with data-test "login-button"
  And I check that the element with data-test "error" should "be.visible"
  Then I check that the element with data-test "error" should contains "Epic sadface: Username is required"

Scenario: Verify that the message "Username is required" appears when submitting without a username and incorrect password.
  Given I check that the element with data-test "error" should "not.exist"
  And I type in the text box with data test "password" the text "incorrectPass"
  When I click on the button with data-test "login-button"
  And I check that the element with data-test "error" should "be.visible"
  Then I check that the element with data-test "error" should contains "Epic sadface: Username is required"

Scenario: Verify that the message "Username is required" appears when submitting without a username and correct password.
  Given I check that the element with data-test "error" should "not.exist"
  And I type in the text box with data test "password" the text "secret_sauce"
  When I click on the button with data-test "login-button"
  And I check that the element with data-test "error" should "be.visible"
  Then I check that the element with data-test "error" should contains "Epic sadface: Username is required"

#Password is required
Scenario: Verify that the message "Password is required" appears when submitting without a password and incorrect username
  Given I check that the element with data-test "error" should "not.exist"
  And I type in the text box with data test "username" the text "incorrectUser"
  When I click on the button with data-test "login-button"
  And I check that the element with data-test "error" should "be.visible"
  Then I check that the element with data-test "error" should contains "Epic sadface: Password is required"

Scenario: Verify that the message "Password is required" appears without a password and correct username
  Given I check that the element with data-test "error" should "not.exist"
  And I type in the text box with data test "username" the text "standard_user"
  When I click on the button with data-test "login-button"
  And I check that the element with data-test "error" should "be.visible"
  Then I check that the element with data-test "error" should contains "Epic sadface: Password is required"

#Username y Pass dont Match
Scenario: Verify that the message "Username and password do not match any user in this service" appears with correct username and incorrect pass
  Given I check that the element with data-test "error" should "not.exist"
  And I type in the text box with data test "username" the text "standard_user"
  And I type in the text box with data test "password" the text "incorrectPass"
  When I click on the button with data-test "login-button"
  And I check that the element with data-test "error" should "be.visible"
  Then I check that the element with data-test "error" should contains "Epic sadface: Username and password do not match any user in this service"

Scenario: Verify that the message "Username and password do not match any user in this service" appears with incorrect username and correct pass
  Given I check that the element with data-test "error" should "not.exist"
  And I type in the text box with data test "username" the text "incorrecUser"
  And I type in the text box with data test "password" the text "secret_sauce"
  When I click on the button with data-test "login-button"
  And I check that the element with data-test "error" should "be.visible"
  Then I check that the element with data-test "error" should contains "Epic sadface: Username and password do not match any user in this service"

#Locked user
Scenario: Verify that the message "Sorry, this user has been locked out." appears
  Given I check that the element with data-test "error" should "not.exist"
  And I type in the text box with data test "username" the text "locked_out_user"
  And I type in the text box with data test "password" the text "secret_sauce"
  When I click on the button with data-test "login-button"
  And I check that the element with data-test "error" should "be.visible"
  Then I check that the element with data-test "error" should contains "Epic sadface: Sorry, this user has been locked out."

#3 Funciones
Scenario: Verify that the text "Swag Labs" appears in body contain
  Given I check that body contain the text "Swag Labs"

Scenario: Verify that the text "NoExiste" doesnt appears in body contain
  Given I check that body not contain the text "NoExiste"

Scenario: Verify that the element with class "login_logo" exist
  Given I check that the element with class "login_logo" should exist
    
 
# # Los Scenarios son los tests (lo que antes era "it")
#  Scenario: login happy path
#   Given I type standar user in login page
#   And I type the correct password in login page
#   And I check that url doesn't contain the endpoint inventory.html
#   When I click on the login button
#   Then I check url include the endpoint inventory.html

# Scenario: simple login
#   Given I login with valid user and password

#  Scenario: Better login
#   Given I type the user name "standard_user"
#   And I type the password "secret_sauce"
#   And I check that the url doesn't include the endpoint "inventory.html"
#   When I click on the button with data-test "login-button"
#   Then I check that the url include the endpoint "inventory.html"

#  Scenario: The very best login test
#   Given I type in the text box with data test "username" the text "standard_user"
#   And I type in the text box with data test "password" the text "secret_sauce"
#   And I check that the url doesn't include the endpoint "inventory.html"
#   When I click on the button with data-test "login-button"
#   Then I check that the url include the endpoint "inventory.html"