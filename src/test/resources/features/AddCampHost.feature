@AddCamp
Feature:Testing host page

#Scenario:Host login with empty blank
#Given Host open the campyuk website
#When Host input "punyagua" as userName and input "12345678" as password
#Then Host should directed into next page
#  And Host click button Add Camp
#  And Host input Title "matacinta", Price "20", Description "apaajaaadaaaahh", geser leaflet market, city "<kotobaru>", Address "siteba", Distance "2"
#  And Host upload image "camp.jpg"and"camp1.jpg"and"switch.PNG"
#  And Host upload business License "diqy.pdf"
#  And Host can not click button

  Scenario:Host add with one empty field(1)
    Given Host open the campyuk website
    When Host input "punyagua" as userName and input "12345678" as password
    Then Host should directed into next page
    And Host click button Add Camp
    And Host input Title "matacinta", Price "<any>", Description "apaajaaadaaaahh", geser leaflet market, city "<kotobaru>", Address "siteba", Distance "2"
    And Host upload image "camp.jpg"and"camp1.jpg"and"switch.PNG"
    And Host upload business License "diqy.pdf"
    And Host can not click button

  Scenario:Host add with one empty field(2)
    Given Host open the campyuk website
    When Host input "punyagua" as userName and input "12345678" as password
    Then Host should directed into next page
    And Host click button Add Camp
    And Host input Title "matacinta", Price "<any>", Description "<any>", geser leaflet market, city "<kotobaru>", Address "siteba", Distance "2"
    And Host upload image "camp.jpg"and"camp1.jpg"and"switch.PNG"
    And Host upload business License "diqy.pdf"
    And Host can not click button

  Scenario:Host add with one empty field(3)
    Given Host open the campyuk website
    When Host input "punyagua" as userName and input "12345678" as password
    Then Host should directed into next page
    And Host click button Add Camp
    And Host input Title "matacinta", Price "<any>", Description "<any>", geser leaflet market, city "<kotobaru>", Address "siteba", Distance "2"
    And Host upload image "camp.jpg"and"camp1.jpg"and"switch.PNG"
    And Host upload business License "diqy.pdf"
    And Host can not click button

  Scenario:Host add with one empty field(3)
    Given Host open the campyuk website
    When Host input "punyagua" as userName and input "12345678" as password
    Then Host should directed into next page
    And Host click button Add Camp
    And Host input Title "matacinta", Price "<any>", Description "<any>", geser leaflet market, city "<any>", Address "siteba", Distance "2"
    And Host upload image "camp.jpg"and"camp1.jpg"and"switch.PNG"
    And Host upload business License "diqy.pdf"
    And Host can not click button

  Scenario:Host add with one empty field(4)
    Given Host open the campyuk website
    When Host input "punyagua" as userName and input "12345678" as password
    Then Host should directed into next page
    And Host click button Add Camp
    And Host input Title "matacinta", Price "<any>", Description "<any>", geser leaflet market, city "kotobaru", Address "<any>", Distance "2"
    And Host upload image "camp.jpg"and"camp1.jpg"and"switch.PNG"
    And Host upload business License "diqy.pdf"
    And Host can not click button

  Scenario:Host add with one empty field(5)
    Given Host open the campyuk website
    When Host input "punyagua" as userName and input "12345678" as password
    Then Host should directed into next page
    And Host click button Add Camp
    And Host input Title "<any>", Price "<any>", Description "<any>", geser leaflet market, city "kotobaru", Address "siteba", Distance "<any>"
    And Host upload image "camp.jpg"and"camp1.jpg"and"switch.PNG"
    And Host upload business License "diqy.pdf"
    And Host can not click button



  
  
  
