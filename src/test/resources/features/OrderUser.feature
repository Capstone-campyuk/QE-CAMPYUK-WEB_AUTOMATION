@OrderUser

Feature:Testing order

  Scenario:User order an Item
    Given User open the campyuk website
    When User input "diqy07" as userName and input "12345678" as password
    Then User should directed into next page
    And User click explore button
    And User Should see the items list
    And User choose ngarai sianok
    And User reserve a campsite
    And User input checkin date "14/02/2023"
    And User input number of guest "1"
    And User choose payment method
    And User input checkout date "15/02/2023"
   And User book campsite

#    Scenario:USER input invalid order(1)
#      Given User open the campyuk website
#      When User input "diqy07" as userName and input "12345678" as password
#      Then User should directed into next page
#      And User click explore button
#      And User Should see the items list
#      And User choose ngarai sianok
#      And User reserve a campsite
#      And User input checkin date "14/02/2023"
#      And User input number of guest "1"
#      And User input quantity items "1"
#      And User choose payment method
#      And User can not click button
##
#  Scenario:USER input invalid order(2)
#    Given User open the campyuk website
#    When User input "diqy07" as userName and input "12345678" as password
#    Then User should directed into next page
#    And User click explore button
#    And User Should see the items list
#    And User choose ngarai sianok
#    And User reserve a campsite
#    And User input checkin date "14/02/2023"
#    And User input number of guest "1"
#    And User input quantity items "1"
#    And User can not click button
##
#  Scenario:USER input invalid order(3)
#    Given User open the campyuk website
#    When User input "diqy07" as userName and input "12345678" as password
#    Then User should directed into next page
#    And User click explore button
#    And User Should see the items list
#    And User choose ngarai sianok
#    And User reserve a campsite
#    And User input checkin date "14/02/2023"
#    And User can not click button
##
#  Scenario:USER input invalid order(4)
#    Given User open the campyuk website
#    When User input "diqy07" as userName and input "12345678" as password
#    Then User should directed into next page
#    And User click explore button
#    And User Should see the items list
#    And User choose ngarai sianok
#    And User reserve a campsite
#    And User input checkin date "14/02/2023"
#    And User input number of guest "1"
#    And User can not click button
##
#  Scenario:User input invalid order(5)
#    Given User open the campyuk website
#    When User input "diqy07" as userName and input "12345678" as password
#    Then User should directed into next page
#    And User click explore button
#    And User Should see the items list
#    And User choose ngarai sianok
#    And User reserve a campsite
#    And User input checkin date "14/02/2023"
#    And User input number of guest "1"
#    And User choose payment method
#    And User can not click button
##
#  Scenario:USER input invalid order(6)
#    Given User open the campyuk website
#    When User input "diqy07" as userName and input "12345678" as password
#    Then User should directed into next page
#    And User click explore button
#    And User Should see the items list
#    And User choose ngarai sianok
#    And User reserve a campsite
#    And User input checkout date "15/02/2023"
#    And User can not click button
#
#  Scenario:USER input invalid order(7)
#    Given User open the campyuk website
#    When User input "diqy07" as userName and input "12345678" as password
#    Then User should directed into next page
#    And User click explore button
#    And User Should see the items list
#    And User choose ngarai sianok
#    And User reserve a campsite
#    And User choose payment method
#    And User input checkout date "15/02/2023"
#    And User can not click button
#
#  Scenario:USER input invalid order(8)
#    Given User open the campyuk website
#    When User input "diqy07" as userName and input "12345678" as password
#    Then User should directed into next page
#    And User click explore button
#    And User Should see the items list
#    And User choose ngarai sianok
#    And User reserve a campsite
#    And User input checkout date "15/02/2023"
#    And User input number of guest "1"
#    And User can not click button
#
#  Scenario:USER input invalid order(9)
#    Given User open the campyuk website
#    When User input "diqy07" as userName and input "12345678" as password
#    Then User should directed into next page
#    And User click explore button
#    And User Should see the items list
#    And User choose ngarai sianok
#    And User reserve a campsite
#    And User input number of guest "1"
#    And User choose payment method
#    And User input checkout date "15/02/2023"
#    And User can not click button











