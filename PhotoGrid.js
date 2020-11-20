var obj = JSON.parse($response.body);
obj.data.isPremium = 1;
$done({body: JSON.stringify(obj)});