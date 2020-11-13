var obj = JSON.parse($response.body);
obj["properties"]["isPremium"]= "true"
$done({body: JSON.stringify(obj)});