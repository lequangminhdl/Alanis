var obj = JSON.parse($response.body);
obj.subscription = 
{
	"active":true,
	"plan":"net.plantsnap.freemium.app.yearly.discount.50",
	"validUntil":"2084-05-10 05:56:31"
    };
$done({body: JSON.stringify(obj)});