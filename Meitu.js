var obj = JSON.parse($response.body);
obj.data =  {
	"core" : true,
    "vip_type" : 1,
    "type" : 1
};
$done({body: JSON.stringify(obj)});