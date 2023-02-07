@Campyuk
  Feature: Testing BOOK CAMP SITE as GUEST
    As a guest I want to book camp site

  Scenario Outline: USER click check button on item list page
#    Given User is already at website
#    And User is already registered on the website
#    And User is already logged in to the website
#    And user is already in item list page
    When User click check button with "<camp>" as campsiteName
    Then User should be directed to detail item page with "<camp>" as campsiteName
  Examples:
    | camp      |
    | Cimandala |


