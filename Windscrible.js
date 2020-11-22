var obj = JSON.parse($response.body);
obj.data = {
	"billing_plan_id" : 2,
    "is_premium" : 1,
};
$done({body: JSON.stringify(obj)});