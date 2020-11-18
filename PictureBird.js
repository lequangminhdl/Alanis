var obj = JSON.parse($response.body);
obj.response = {
   "is_check" : "1",
   "credential" : {
   	"expires" : 4605734644
    },
};
$done({body: JSON.stringify(obj)});
