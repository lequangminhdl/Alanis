var obj = JSON.parse($response.body);

obj.subscription = {
	"active":true
	};
$done({body: JSON.stringify(obj)});
