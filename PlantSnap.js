var obj = JSON.parse($response.body);

 obj = {
 	"status":true,
 	"userType":{
 		"code":1,
 		"name":"subscribed"
 	},
 	"subscription":{
 		"active":true,
 		"plan":"net.plantsnap.freemium.app.yearly.discount.50",
 		"validUntil":"2021-10-07 05:56:31"
 	},
 	"timestamp":1602219227
 };

$done({body: JSON.stringify(obj)});
