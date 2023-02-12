@MyBooking
Feature:Testing item list as user

  Scenario:user click on my history
    Given User open the campyuk website
    When User input "diqy07" as userName and input "12345678" as password
    Then User should directed into next page
    And User click explore button
    And User Should see the items list
    And User want to see history for their own booking
    And User see all their bookings
    And User click babi panggang karo order
    Then User should see detail order

  Scenario:user click on my history and cancel booking
    Given User open the campyuk website
    When User input "diqy07" as userName and input "12345678" as password
    Then User should directed into next page
    And User click explore button
    And User Should see the items list
    And User want to see history for their own booking
    And User see all their bookings
    And User click babi panggang karo order
    Then User should see detail order
    And User click cancel on babi panggang karo order
