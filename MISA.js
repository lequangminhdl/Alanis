var obj = JSON.parse($response.body);
obj.IsPremium = true;
$done({body: JSON.stringify(obj)});