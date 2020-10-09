var obj = JSON.parse($response.body);

obj.subscription = {
	"validUntil":"2021-10-07 05:56:31",
	"active":true,
	"plan":"net.plantsnap.freemium.app.yearly.discount.50"
	};
$done({body: JSON.stringify(obj)});
