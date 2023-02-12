Feature: Register User
  User make registration on Campyuk Website

  @Step @PositiveTestCase
  Scenario: guest input all field to registration
    Given guest already at campyuk website and has not registered yet
    And guest click login button on landing page
    And guest click register button on Login page
    And directed into Register page
    When guest choose register as Guest
    And guest input field username "Lilac7", full name "Lilac7", Email "diiahr82@gmail.com", and Password "Lilac7"
    Then guest should see an pop up message "success create account"
    And click OK button on pop up