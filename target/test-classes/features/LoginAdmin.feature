@Login
Feature: as admin i want to log in

  Scenario: Host login with valid "username" and "password"
    Given Admin open the campyuk website
    When Admin input "admin" as userName and input "admin" as password
    Then Admin should directed into next page


  Scenario Outline: Invalid Login Admin
    Given Admin open the campyuk website
    When Admin input "<userName>" as userName and input "<password>" as password
    Then Admin see error "<errorMessage>" on login page
    Examples:
      | userName | password   | errorMessage                           |
      | admin    | 3283782748 | password not matched                   |
      | apesiii  | mencoba12  | account not registered or server error |
