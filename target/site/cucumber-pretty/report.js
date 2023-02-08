$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LoginHost.feature");
formatter.feature({
  "line": 2,
  "name": "as host i want to log in",
  "description": "",
  "id": "as-host-i-want-to-log-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginHost"
    }
  ]
});
formatter.before({
  "duration": 9723512800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Host login with valid \"username\" and \"password\"",
  "description": "",
  "id": "as-host-i-want-to-log-in;host-login-with-valid-\"username\"-and-\"password\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Host open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Host input \"punyagua\" as userName and input \"12345678\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Host should directed into next page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginHostSteps.verifyDisplay()"
});
formatter.result({
  "duration": 352575300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "punyagua",
      "offset": 12
    },
    {
      "val": "12345678",
      "offset": 45
    }
  ],
  "location": "LoginHostSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 6362464300,
  "status": "passed"
});
formatter.match({
  "location": "LoginHostSteps.verifyDisplayHost()"
});
formatter.result({
  "duration": 118407300,
  "status": "passed"
});
formatter.after({
  "duration": 735018900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Invalid Login Host",
  "description": "",
  "id": "as-host-i-want-to-log-in;invalid-login-host",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "Host open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Host input \"\u003cuserName\u003e\" as userName and input \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Host see error \"\u003cerrorMessage\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-host-i-want-to-log-in;invalid-login-host;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorMessage"
      ],
      "line": 15,
      "id": "as-host-i-want-to-log-in;invalid-login-host;;1"
    },
    {
      "cells": [
        "punyagua",
        "apelu",
        "password not matched"
      ],
      "line": 16,
      "id": "as-host-i-want-to-log-in;invalid-login-host;;2"
    },
    {
      "cells": [
        "apesiii",
        "mencoba12",
        "account not registered or server error"
      ],
      "line": 17,
      "id": "as-host-i-want-to-log-in;invalid-login-host;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12170658400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid Login Host",
  "description": "",
  "id": "as-host-i-want-to-log-in;invalid-login-host;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginHost"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Host open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Host input \"punyagua\" as userName and input \"apelu\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Host see error \"password not matched\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginHostSteps.verifyDisplay()"
});
formatter.result({
  "duration": 250269400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "punyagua",
      "offset": 12
    },
    {
      "val": "apelu",
      "offset": 45
    }
  ],
  "location": "LoginHostSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 6453340900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password not matched",
      "offset": 16
    }
  ],
  "location": "LoginHostSteps.errorText(String)"
});
formatter.result({
  "duration": 5146959600,
  "status": "passed"
});
formatter.after({
  "duration": 818228400,
  "status": "passed"
});
formatter.before({
  "duration": 5354865200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid Login Host",
  "description": "",
  "id": "as-host-i-want-to-log-in;invalid-login-host;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@LoginHost"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Host open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Host input \"apesiii\" as userName and input \"mencoba12\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Host see error \"account not registered or server error\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginHostSteps.verifyDisplay()"
});
formatter.result({
  "duration": 204888600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apesiii",
      "offset": 12
    },
    {
      "val": "mencoba12",
      "offset": 44
    }
  ],
  "location": "LoginHostSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 6329464800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "account not registered or server error",
      "offset": 16
    }
  ],
  "location": "LoginHostSteps.errorText(String)"
});
formatter.result({
  "duration": 5197315600,
  "status": "passed"
});
formatter.after({
  "duration": 760824700,
  "status": "passed"
});
});