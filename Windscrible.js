var obj = JSON.parse($response.body);
obj.data = {
    "is_premium" : 1,
};
$done({body: JSON.stringify(obj)});
