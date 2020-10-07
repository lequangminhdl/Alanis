var obj = JSON.parse($response.body);

obj = {
"subscription" {
        "active":true,
        "plan":"monthly",
        "validUntil":4099821292
    }
"subscription"."userType" {
		"code":1,
        "name":"Premium"
    }
    };
$done({body: JSON.stringify(obj)});
