@CampSite
Feature:Testing item list as user

  Scenario:Validate display campsite and all
    Given User open the campyuk website
    When User input "diqy07" as userName and input "12345678" as password
    Then User should directed into next page
    And User click explore button
    And User Should see the items list
    And User choose babi panggang karo camp site
    And User reserve a campsite

