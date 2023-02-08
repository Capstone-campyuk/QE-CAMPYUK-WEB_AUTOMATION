@Step
  Feature: Register Host
    Host make registration on Campyuk Website

  Scenario: Host input valid data to Registration
    Given host already at campyuk website
    And host click login button on landing page
    And host click register button on Login page
    And host directed into Register page
    When I choose register as Host
    And I enter "Diahr" as Username, "Diahr" as Full Name, "diiahr82@gmail.com" as Email, and "12345" as Password
    Then I should see an pop up message "success create accpunt"
    And click OK button on pop up
