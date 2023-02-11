$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/CampSiteUser.feature");
formatter.feature({
  "line": 2,
  "name": "Testing item list as user",
  "description": "",
  "id": "testing-item-list-as-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@CampSite"
    }
  ]
});
formatter.before({
  "duration": 11051984700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validate display campsite and all",
  "description": "",
  "id": "testing-item-list-as-user;validate-display-campsite-and-all",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User input \"diqy07\" as userName and input \"12345678\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User should directed into next page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click explore button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User Should see the items list",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User choose babi panggang karo camp site",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User reserve a campsite",
  "keyword": "And "
});
formatter.match({
  "location": "LogInUserSteps.verifyDisplay()"
});
formatter.result({
  "duration": 467522700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diqy07",
      "offset": 12
    },
    {
      "val": "12345678",
      "offset": 43
    }
  ],
  "location": "LogInUserSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 6335446700,
  "status": "passed"
});
formatter.match({
  "location": "LogInUserSteps.verifyDisplay1()"
});
formatter.result({
  "duration": 15660878200,
  "status": "passed"
});
formatter.match({
  "location": "CampSiteUserSteps.ExploreButton()"
});
formatter.result({
  "duration": 149690700,
  "status": "passed"
});
formatter.match({
  "location": "CampSiteUserSteps.verifyCampsitePage()"
});
formatter.result({
  "duration": 8263904700,
  "status": "passed"
});
formatter.match({
  "location": "CampSiteUserSteps.CheckButton()"
});
formatter.result({
  "duration": 5211573500,
  "status": "passed"
});
formatter.match({
  "location": "CampSiteUserSteps.CheckReserve()"
});
formatter.result({
  "duration": 5275437100,
  "status": "passed"
});
formatter.after({
  "duration": 9996737800,
  "status": "passed"
});
});