@Profile
Feature:Testing Update feature

  Scenario Outline:update profile
    Given User open the campyuk website
    When User input "diqy07" as userName and input "12345678" as password
    Then User should directed into next page
    And User click explore button
    And User Should see the items list
    And User click profile button
    And User click update button
    When User input"<fullName>"as fullName and input"<userName>" as userName and input"<email>"as email and input"<image>"as image

    Examples:
      | fullName  | userName | email                 | image      |
      | masihdiqy | diqy08   | apaadanya@gmail.com   | switch.PNG |
      | dialog    |          | senja@gmail.com       | switch.PNG |
      |           | maimunah | apasi@gmail.com       | switch.PNG |
      |           |          | masihdisini@gmail.com |            |
      |           | kojiro   |                       |            |
      | inosuke   |          |                       |            |

  Scenario:remove profile
    Given User open the campyuk website
    When User input "diqy08" as userName and input "12345678" as password
    Then User should directed into next page
    And User click explore button
    And User Should see the items list
    And User click profile button
    And User remove profile
    Then User should directed into login page

  Scenario: cancel remove profile
    Given User open the campyuk website
    When User input "diqy07" as userName and input "12345678" as password
    Then User should directed into next page
    And User click explore button
    And User Should see the items list
    And User click profile button
    And User cancel remove profile
