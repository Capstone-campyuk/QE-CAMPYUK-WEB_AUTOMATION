$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/RegisterHost.feature");
formatter.feature({
  "line": 1,
  "name": "Register Host",
  "description": "  Host make registration on Campyuk Website",
  "id": "register-host",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7700153858,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Host input valid data to Registration",
  "description": "",
  "id": "register-host;host-input-valid-data-to-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Step"
    },
    {
      "line": 4,
      "name": "@PositiveTestCase"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "host already at campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "host click login button on landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "host click register button on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "directed into Register page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose register as Host",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"Rani3\" as Username, \"Rani3\" as Full Name, \"rani3@gmail.com\" as Email, and \"Rani3\" as Password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see an pop up message \"success create account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click OK button on pop up",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterHostSteps.verifyHostOnLandingPage()"
});
formatter.result({
  "duration": 584743059,
  "status": "passed"
});
formatter.match({
  "location": "RegisterHostSteps.hostClickBtnLoginOnLandingPage()"
});
formatter.result({
  "duration": 142812616,
  "status": "passed"
});
formatter.match({
  "location": "RegisterHostSteps.hostClickBtnRegisterOnLoginPage()"
});
formatter.result({
  "duration": 584962254,
  "status": "passed"
});
formatter.match({
  "location": "RegisterHostSteps.verifyHostOnRegisterPage()"
});
formatter.result({
  "duration": 2258656166,
  "status": "passed"
});
formatter.match({
  "location": "RegisterHostSteps.selectRoleRegisterHost()"
});
formatter.result({
  "duration": 4170299141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rani3",
      "offset": 9
    },
    {
      "val": "Rani3",
      "offset": 30
    },
    {
      "val": "rani3@gmail.com",
      "offset": 52
    },
    {
      "val": "Rani3",
      "offset": 84
    }
  ],
  "location": "RegisterHostSteps.inputCredentialHost(String,String,String,String)"
});
formatter.result({
  "duration": 4622774969,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success create account",
      "offset": 32
    }
  ],
  "location": "RegisterHostSteps.verifyPopUpMessage(String)"
});
formatter.result({
  "duration": 36391994,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[success create account]\u003e but was:\u003c[data already used or duplicated]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat step_definitions.RegisterHostSteps.verifyPopUpMessage(RegisterHostSteps.java:67)\n\tat ✽.Then I should see an pop up message \"success create account\"(features/RegisterHost.feature:12)\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterHostSteps.verifyBtnPopUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 246651970,
  "status": "passed"
});
formatter.uri("features/RegisterUser.feature");
formatter.feature({
  "line": 1,
  "name": "Register User",
  "description": "User make registration on Campyuk Website",
  "id": "register-user",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4180987211,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "guest input all field to registration",
  "description": "",
  "id": "register-user;guest-input-all-field-to-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Step"
    },
    {
      "line": 4,
      "name": "@PositiveTestCase"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "guest already at campyuk website and has not registered yet",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "guest click login button on landing page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "guest click register button on Login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "directed into Register page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "guest choose register as Guest",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "guest input field username \"Lilac5\", full name \"Lilac5\", Email \"diiahr82@gmail.com\", and Password \"Lilac5\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "guest click Register button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "guest should see an pop up message \"success create account\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "click OK button on pop up",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterUserSteps.verifyUserOnLandingPage()"
});
formatter.result({
  "duration": 75451053,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserSteps.userClickBtnLoginOnLandingPage()"
});
formatter.result({
  "duration": 122927732,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserSteps.guestClickBtnRegisterOnLoginPage()"
});
formatter.result({
  "duration": 393587707,
  "status": "passed"
});
formatter.match({
  "location": "RegisterHostSteps.verifyHostOnRegisterPage()"
});
formatter.result({
  "duration": 2227837771,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserSteps.selectRoleRegisterUser()"
});
formatter.result({
  "duration": 4092481340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lilac5",
      "offset": 28
    },
    {
      "val": "Lilac5",
      "offset": 48
    },
    {
      "val": "diiahr82@gmail.com",
      "offset": 64
    },
    {
      "val": "Lilac5",
      "offset": 99
    }
  ],
  "location": "RegisterUserSteps.inputCredentialGuest(String,String,String,String)"
});
formatter.result({
  "duration": 4517553402,
  "status": "passed"
});
formatter.match({
  "location": "RegisterUserSteps.guestClickRegisterButton()"
});
formatter.result({
  "duration": 74226415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success create account",
      "offset": 36
    }
  ],
  "location": "RegisterUserSteps.guestVerifyPopUpMessage(String)"
});
formatter.result({
  "duration": 51804199,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#swal2\\-html\\-container\"}\n  (Session info: chrome\u003d109.0.5414.119)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027Research-Synergy-Foundation.local\u0027, ip: \u0027fe80:0:0:0:1ccc:7650:f391:bd22%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [48ef427319083e6b1f2e19ed560dd8e4, findElement {using\u003did, value\u003dswal2-html-container}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.119, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: /var/folders/7v/sz1yyxp54bq...}, goog:chromeOptions: {debuggerAddress: localhost:59528}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:59528/devtoo..., se:cdpVersion: 109.0.5414.119, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 48ef427319083e6b1f2e19ed560dd8e4\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\n\tat com.sun.proxy.$Proxy21.getText(Unknown Source)\n\tat org.example.pageObject.RegisterPage.getPopUpMessage(RegisterPage.java:83)\n\tat step_definitions.RegisterUserSteps.guestVerifyPopUpMessage(RegisterUserSteps.java:62)\n\tat ✽.Then guest should see an pop up message \"success create account\"(features/RegisterUser.feature:13)\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterHostSteps.verifyBtnPopUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 225180661,
  "status": "passed"
});
});