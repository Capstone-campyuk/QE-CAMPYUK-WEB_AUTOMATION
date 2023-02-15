@BookingList
Feature:Testing booking list page

  Scenario:Host add with one empty field(1)
    Given Host open the campyuk website
    When Host input "punyagua" as userName and input "12345678" as password
    Then Host should directed into next page
    And Host see bookings list