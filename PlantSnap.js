var obj = JSON.parse($response.body);

obj.userType = {
	"code":1,
	"name":"subscribed"
obj.subscription = {
	"active":true,
	"validUntil":"2084-05-10 05:56:31",
	"plan":"net.plantsnap.freemium.app.yearly.discount.50"
    };
$done({body: JSON.stringify(obj)});
