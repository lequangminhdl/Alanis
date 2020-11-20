var obj = JSON.parse($response.body);
obj.proStatus = {
	"renewable" : false,
    "isGracePeriodExpired" : false,
    "level" : "gold",
    "isExpired" : false,
    "gracePeriodExpires" : "2070-01-01T00:00:00Z",
    "expires" : "2070-01-01T00:00:00Z",
    "isFreeTrial" : false
  };
$done({body: JSON.stringify(obj)});