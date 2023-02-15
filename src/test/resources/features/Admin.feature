@Admin
Feature:Testing Admin

  Scenario:Admin check license
    Given Admin open the campyuk website
    When Admin input "admin" as userName and input "admin" as password
    Then Admin should directed into next page
    And Admin check status of request
    And Admin see detail request
    And Admin see license

  Scenario:Admin accept request
    Given Admin open the campyuk website
    When Admin input "admin" as userName and input "admin" as password
    Then Admin should directed into next page
    And Admin check status of request
    And Admin see detail request
    And Admin accept the request

  Scenario:Admin decline request
    Given Admin open the campyuk website
    When Admin input "admin" as userName and input "admin" as password
    Then Admin should directed into next page
    And Admin check status of request
    And Admin see detail request
    And Admin decline the request
