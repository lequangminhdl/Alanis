var obj = JSON.parse($response.body);
obj.result =  {
	"paid" : true,
    "unlimited" : true
};
$done({body: JSON.stringify(obj)});