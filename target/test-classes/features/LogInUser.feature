@Login
Feature: as user i want login into campyuk website


  Scenario:User normal login
    Given User open the campyuk website
    When User input "diqy07" as userName and input "12345678" as password
    Then User should directed into next page

  Scenario Outline:Invalid Login
    Given User open the campyuk website
    When User input "<userName>" as userName and input "<password>" as password
    Then User see error "<errorMessage>" on login page
    Examples:
      | userName  | password  | errorMessage                           |
      | diqy07    | apelu     | password not matched                   |
      | auwjduawj | mencoba12 | account not registered or server error |


#  Scenario Outline: guest login with field username blank data
#    Given User open the campyuk website
#    When User input "<userName>" as userName and input "<password>" as password
#    And User should not click button login
#    Examples:
#      | userName | password |
#      |          | apelu    |
#      | apesiii  |          |
