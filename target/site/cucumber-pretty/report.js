$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/LogInUser.feature");
formatter.feature({
  "line": 2,
  "name": "as user i want login into campyuk website",
  "description": "",
  "id": "as-user-i-want-login-into-campyuk-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 15004907600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User normal login",
  "description": "",
  "id": "as-user-i-want-login-into-campyuk-website;user-normal-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User input \"diqy07\" as userName and input \"12345678\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should directed into next page",
  "keyword": "Then "
});
formatter.match({
  "location": "LogInUserSteps.verifyDisplay()"
});
formatter.result({
  "duration": 486523800,
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
  "duration": 6395248300,
  "status": "passed"
});
formatter.match({
  "location": "LogInUserSteps.verifyDisplay1()"
});
formatter.result({
  "duration": 227177000,
  "status": "passed"
});
formatter.after({
  "duration": 4571344000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Invalid Login",
  "description": "",
  "id": "as-user-i-want-login-into-campyuk-website;invalid-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "User open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"\u003cuserName\u003e\" as userName and input \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"\u003cerrorMessage\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-user-i-want-login-into-campyuk-website;invalid-login;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorMessage"
      ],
      "line": 15,
      "id": "as-user-i-want-login-into-campyuk-website;invalid-login;;1"
    },
    {
      "cells": [
        "diqy07",
        "apelu",
        "password not matched"
      ],
      "line": 16,
      "id": "as-user-i-want-login-into-campyuk-website;invalid-login;;2"
    },
    {
      "cells": [
        "auwjduawj",
        "mencoba12",
        "account not registered or server error"
      ],
      "line": 17,
      "id": "as-user-i-want-login-into-campyuk-website;invalid-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10904289699,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid Login",
  "description": "",
  "id": "as-user-i-want-login-into-campyuk-website;invalid-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"diqy07\" as userName and input \"apelu\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"password not matched\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LogInUserSteps.verifyDisplay()"
});
formatter.result({
  "duration": 223889601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diqy07",
      "offset": 12
    },
    {
      "val": "apelu",
      "offset": 43
    }
  ],
  "location": "LogInUserSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 6460766101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password not matched",
      "offset": 16
    }
  ],
  "location": "LogInUserSteps.errorText(String)"
});
formatter.result({
  "duration": 3209579601,
  "status": "passed"
});
formatter.after({
  "duration": 938370600,
  "status": "passed"
});
formatter.before({
  "duration": 9009290000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid Login",
  "description": "",
  "id": "as-user-i-want-login-into-campyuk-website;invalid-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "User open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User input \"auwjduawj\" as userName and input \"mencoba12\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User see error \"account not registered or server error\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LogInUserSteps.verifyDisplay()"
});
formatter.result({
  "duration": 382148000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auwjduawj",
      "offset": 12
    },
    {
      "val": "mencoba12",
      "offset": 46
    }
  ],
  "location": "LogInUserSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 6376808501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "account not registered or server error",
      "offset": 16
    }
  ],
  "location": "LogInUserSteps.errorText(String)"
});
formatter.result({
  "duration": 3124925100,
  "status": "passed"
});
formatter.after({
  "duration": 1135494199,
  "status": "passed"
});
formatter.uri("features/LoginAdmin.feature");
formatter.feature({
  "line": 2,
  "name": "as admin i want to log in",
  "description": "",
  "id": "as-admin-i-want-to-log-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 8348067300,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Host login with valid \"username\" and \"password\"",
  "description": "",
  "id": "as-admin-i-want-to-log-in;host-login-with-valid-\"username\"-and-\"password\"",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Admin open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Admin input \"admin\" as userName and input \"admin\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Admin should directed into next page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAdminSteps.verifyDisplay()"
});
formatter.result({
  "duration": 169682201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "admin",
      "offset": 43
    }
  ],
  "location": "LoginAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 6395949201,
  "status": "passed"
});
formatter.match({
  "location": "LoginAdminSteps.verifyDisplay1()"
});
formatter.result({
  "duration": 66152101,
  "status": "passed"
});
formatter.after({
  "duration": 885079100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Invalid Login Admin",
  "description": "",
  "id": "as-admin-i-want-to-log-in;invalid-login-admin",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "Admin open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Admin input \"\u003cuserName\u003e\" as userName and input \"\u003cpassword\u003e\" as password",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Admin see error \"\u003cerrorMessage\u003e\" on login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "as-admin-i-want-to-log-in;invalid-login-admin;",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "errorMessage"
      ],
      "line": 15,
      "id": "as-admin-i-want-to-log-in;invalid-login-admin;;1"
    },
    {
      "cells": [
        "admin",
        "3283782748",
        "password not matched"
      ],
      "line": 16,
      "id": "as-admin-i-want-to-log-in;invalid-login-admin;;2"
    },
    {
      "cells": [
        "apesiii",
        "mencoba12",
        "account not registered or server error"
      ],
      "line": 17,
      "id": "as-admin-i-want-to-log-in;invalid-login-admin;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7138242400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Invalid Login Admin",
  "description": "",
  "id": "as-admin-i-want-to-log-in;invalid-login-admin;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Admin open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Admin input \"admin\" as userName and input \"3283782748\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Admin see error \"password not matched\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAdminSteps.verifyDisplay()"
});
formatter.result({
  "duration": 242940601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 13
    },
    {
      "val": "3283782748",
      "offset": 43
    }
  ],
  "location": "LoginAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 6362440400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password not matched",
      "offset": 17
    }
  ],
  "location": "LoginAdminSteps.errorText(String)"
});
formatter.result({
  "duration": 3116301200,
  "status": "passed"
});
formatter.after({
  "duration": 1338890700,
  "status": "passed"
});
formatter.before({
  "duration": 6247139300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Invalid Login Admin",
  "description": "",
  "id": "as-admin-i-want-to-log-in;invalid-login-admin;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Admin open the campyuk website",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Admin input \"apesiii\" as userName and input \"mencoba12\" as password",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Admin see error \"account not registered or server error\" on login page",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginAdminSteps.verifyDisplay()"
});
formatter.result({
  "duration": 218152500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apesiii",
      "offset": 13
    },
    {
      "val": "mencoba12",
      "offset": 45
    }
  ],
  "location": "LoginAdminSteps.inputCredential(String,String)"
});
formatter.result({
  "duration": 6450481700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "account not registered or server error",
      "offset": 17
    }
  ],
  "location": "LoginAdminSteps.errorText(String)"
});
formatter.result({
  "duration": 3153462299,
  "status": "passed"
});
formatter.after({
  "duration": 965324300,
  "status": "passed"
});
formatter.uri("features/LoginHost.feature");
formatter.feature({
  "line": 2,
  "name": "as host i want to log in",
  "description": "",
  "id": "as-host-i-want-to-log-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 8626495400,
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
  "duration": 220218600,
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
  "duration": 6476265601,
  "status": "passed"
});
formatter.match({
  "location": "LoginHostSteps.verifyDisplayHost()"
});
formatter.result({
  "duration": 81000300,
  "status": "passed"
});
formatter.after({
  "duration": 936178799,
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
  "duration": 9285758200,
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
      "name": "@Login"
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
  "duration": 183528199,
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
  "duration": 6385012399,
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
  "duration": 3154722600,
  "status": "passed"
});
formatter.after({
  "duration": 1306004000,
  "status": "passed"
});
formatter.before({
  "duration": 9342609200,
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
      "name": "@Login"
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
  "duration": 244384901,
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
  "duration": 6415484100,
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
  "duration": 3125366400,
  "status": "passed"
});
formatter.after({
  "duration": 1335547501,
  "status": "passed"
});
});