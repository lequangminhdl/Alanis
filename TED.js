var obj = JSON.parse($response.body);
obj.is_ted_supporter = true;
$done({body: JSON.stringify(obj)});
