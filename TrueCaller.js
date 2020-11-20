var obj = JSON.parse($response.body);
obj.proStatus = {
    "renewable" : false,
    "start" : "1970-01-01T00:00:00Z",
    "isGracePeriodExpired" : false,
    "level" : "gold",
    "isExpired" : false,
    "gracePeriodExpires" : "2070-01-01T00:00:00Z",
    "contactRequestQuota" : {
      "month" : 30,
      "Year" : 365
    },
    "credits" : 0,
    "expires" : "2070-01-01T00:00:00Z",
    "isFreeTrial" : false
  };
$done({body: JSON.stringify(obj)});
