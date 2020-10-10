var obj = JSON.parse($response.body);

obj.subscription = {
	"active":true,
	"validUntil":"2021-10-07 05:56:31",
	"plan":"net.plantsnap.freemium.app.yearly.discount.50"
	};
$done({body: JSON.stringify(obj)});
