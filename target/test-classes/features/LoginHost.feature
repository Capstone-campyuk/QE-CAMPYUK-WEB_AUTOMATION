@Login
Feature: as host i want to log in

  Scenario: Host login with valid "username" and "password"
    Given Host open the campyuk website
    When Host input "punyagua" as userName and input "12345678" as password
    Then Host should directed into next page


  Scenario Outline:Invalid Login Host
    Given Host open the campyuk website
    When Host input "<userName>" as userName and input "<password>" as password
    Then Host see error "<errorMessage>" on login page
    Examples:
      | userName | password  | errorMessage                           |
      | punyagua | apelu     | password not matched                   |
      | apesiii  | mencoba12 | account not registered or server error |

#  Scenario Outline: guest login with field username blank data
#    Given Host open the campyuk website
#    When Host input "<userName>" as userName and input "<password>" as password
#  And
#    Examples:
#      | userName | password |  |
#      |          | apelu    |  |
#      | apesiii  |          |  |
