var obj = JSON.parse($response.body);

obj.subscription.userType=
      {
        "active":true,
        "plan":"monthly",
        "validUntil":4099821292,
        "code":1,
        "name":"premium"
      };
$done({body: JSON.stringify(obj)});
