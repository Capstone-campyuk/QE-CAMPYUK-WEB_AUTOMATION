@Login
Feature: as user i want login into campyuk website

  @positive
  Scenario:User normal login
    Given User open the campyuk website
#    And User click login button
    When User input "makmur21" as userName and input "12345678" as password
    Then User should directed into next page

    @negative
    Scenario Outline: Invalid Login
      Given User open the campyuk website
      When User input "<userName>" as userName and input "<password>" as password
      And User see error "<errorMessage>" on login page
      Examples:
        | userName | password  | errorMessage                           |
        | makmur21 | apelu     | password not matched                   |
        | apesiii  | mencoba12 | account not registered or server error |
