@RegisterHost
Feature: Register HostHost make registration on Campyuk Website


  Scenario: Host input valid data to Registration
    Given host already at campyuk website
    And host click login button on landing page
    And host click register button on Login page
    And directed into Register page
    When I choose register as Host
    And I enter "omaewa" as Username, "nidawidjwndwj" as Full Name, "rani3@gmail.com" as Email, and "123456789" as Password
    Then I should see an pop up message "success create account"
    And click OK button on pop up
