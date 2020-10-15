var obj = JSON.parse($response.body);

obj.data = [
{
	"is_vip": true,
	"start_time": 1581442291,
	"end_time": 3790570877,
	"is_subscribe": 1
	}];
$done({body: JSON.stringify(obj)});