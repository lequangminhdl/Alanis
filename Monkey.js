//https:\/\/www\.api\.monkeyuni\.net\/api\/v1\/mobile\/account\/load-update?

var obj = JSON.parse($response.body);

obj["purchased"]= [
	{
	  "pay_inapp": true,
	  "time_expire": 0,
      "product_list": [],
      "is_active": true,
      "is_free": false
    }
 ];
$done({body: JSON.stringify(obj)});