var obj = JSON.parse($response.body);

obj.subscription=
      {
        "active":true,
        "plan":"monthly",
        "validUntil":4099821292
      };
$done({body: JSON.stringify(obj)});