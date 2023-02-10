$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/ProfileUser.feature");
formatter.feature({
  "line": 2,
  "name": "Testing Update feature",
  "description": "",
  "id": "testing-update-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Profile"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": "update profile",
  "description": "",
  "id": "testing-update-feature;update-profile",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
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
  "name": "User click profile button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click update button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User input\"\u003cfullName\u003e\"as fullName and input\"\u003cuserName\u003e\" as userName and input\"\u003cemail\u003e\"as email and input\"\u003cimage\u003e\"as image",
  "keyword": "When "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "testing-update-feature;update-profile;",
  "rows": [
    {
      "cells": [
        "fullName",
        "userName",
        "email",
        "image"
      ],
      "line": 15,
      "id": "testing-update-feature;update-profile;;1"
    },
    {
      "cells": [
        "masihdiqy",
        "diqy08",
        "apaadanya@gmail.com",
        "switch.PNG"
      ],
      "line": 16,
      "id": "testing-update-feature;update-profile;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11533172799,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "update profile",
  "description": "",
  "id": "testing-update-feature;update-profile;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Profile"
    }
  ]
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
  "name": "User click profile button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User click update button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User input\"masihdiqy\"as fullName and input\"diqy08\" as userName and input\"apaadanya@gmail.com\"as email and input\"switch.PNG\"as image",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "When "
});
formatter.match({
  "location": "LogInUserSteps.verifyDisplay()"
});
formatter.result({
  "duration": 512853599,
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
  "duration": 6331327300,
  "status": "passed"
});
formatter.match({
  "location": "LogInUserSteps.verifyDisplay1()"
});
formatter.result({
  "duration": 46320401,
  "status": "passed"
});
formatter.match({
  "location": "CampSiteUserSteps.ExploreButton()"
});
formatter.result({
  "duration": 226200700,
  "status": "passed"
});
formatter.match({
  "location": "CampSiteUserSteps.verifyCampsitePage()"
});
formatter.result({
  "duration": 5178393000,
  "status": "passed"
});
formatter.match({
  "location": "ProfileUserSteps.ProfileButton()"
});
formatter.result({
  "duration": 64980200,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d109.0.5414.120)\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-NR0C4NT\u0027, ip: \u0027192.168.1.3\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_351\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [45f6ddfe67c544ca6e19fe2eff66cef8, clickElement {id\u003d554472f9-a646-4da5-a0d2-08e2e3d0dd6a}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.120, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\istanbul\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:51343}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51343/devtoo..., se:cdpVersion: 109.0.5414.120, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (45f6ddfe67c544ca6e19fe2eff66cef8)] -\u003e id: btn-profilelg]\nSession ID: 45f6ddfe67c544ca6e19fe2eff66cef8\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\r\n\tat org.example.pageObject.UserPage.clickProfile(UserPage.java:38)\r\n\tat step_definitions.ProfileUserSteps.ProfileButton(ProfileUserSteps.java:20)\r\n\tat ✽.And User click profile button(features/ProfileUser.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ProfileUserSteps.UpdateButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "masihdiqy",
      "offset": 11
    },
    {
      "val": "diqy08",
      "offset": 43
    },
    {
      "val": "apaadanya@gmail.com",
      "offset": 73
    },
    {
      "val": "switch.PNG",
      "offset": 112
    }
  ],
  "location": "ProfileUserSteps.inputUpdate(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1565808500,
  "status": "passed"
});
});