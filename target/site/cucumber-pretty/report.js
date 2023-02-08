$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/RegisterHost.feature");
formatter.feature({
  "line": 2,
  "name": "Register Host",
  "description": "Host make registration on Campyuk Website",
  "id": "register-host",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Step"
    }
  ]
});
formatter.before({
  "duration": 9434614388,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Host input valid data to Registration",
  "description": "",
  "id": "register-host;host-input-valid-data-to-registration",
  "type": "scenario",
  "keyword": "Scenario"
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
  "name": "host directed into Register page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I choose register as Host",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \"Diahr\" as Username, \"Diahr\" as Full Name, \"diiahr82@gmail.com\" as Email, and \"12345\" as Password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see an pop up message \"success create accpunt\"",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "click OK button on pop up",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterHostSteps.verifyLandingPage()"
});
formatter.result({
  "duration": 466347080,
  "status": "passed"
});
formatter.match({
  "location": "RegisterHostSteps.verifyBtnLoginOnLandingPage()"
});
formatter.result({
  "duration": 250173530,
  "status": "passed"
});
formatter.match({
  "location": "RegisterHostSteps.verifyBtnRegisterOnLoginPage()"
});
formatter.result({
  "duration": 1242066315,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton id\u003d\"btn-login\" class\u003d\"btn bg-btn text-white hover:bg-btnh border-none rounded-full w-full disabled:bg-btnh disabled:text-gray-200 my-3 mt-10 btn-disabled\" disabled\u003d\"\"\u003e...\u003c/button\u003e is not clickable at point (1068, 430). Other element would receive the click: \u003cform\u003e...\u003c/form\u003e\n  (Session info: chrome\u003d109.0.5414.119)\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027Research-Synergy-Foundation.local\u0027, ip: \u0027fe80:0:0:0:1ccc:7650:f391:bd22%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [00b6f1fa256fd46fb1a23b862ac92dcc, clickElement {id\u003d308fc64a-d6c8-4a80-829d-cf2d0befc428}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.119, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: /var/folders/7v/sz1yyxp54bq...}, goog:chromeOptions: {debuggerAddress: localhost:64997}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:64997/devtoo..., se:cdpVersion: 109.0.5414.119, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on MAC (00b6f1fa256fd46fb1a23b862ac92dcc)] -\u003e id: btn-login]\nSession ID: 00b6f1fa256fd46fb1a23b862ac92dcc\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\n\tat com.sun.proxy.$Proxy21.click(Unknown Source)\n\tat org.example.pageObject.RegisterPage.clickRegister(RegisterPage.java:56)\n\tat step_definitions.RegisterHostSteps.verifyBtnRegisterOnLoginPage(RegisterHostSteps.java:34)\n\tat ✽.And host click register button on Login page(features/RegisterHost.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "location": "RegisterHostSteps.verifyRegisterPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterHostSteps.selectRoleRegister()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Diahr",
      "offset": 9
    },
    {
      "val": "Diahr",
      "offset": 30
    },
    {
      "val": "diiahr82@gmail.com",
      "offset": 52
    },
    {
      "val": "12345",
      "offset": 87
    }
  ],
  "location": "RegisterHostSteps.inputCredential(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "success create accpunt",
      "offset": 32
    }
  ],
  "location": "RegisterHostSteps.verifyPopUpMessage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "RegisterHostSteps.verifyBtnPopUp()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 237186322,
  "status": "passed"
});
});