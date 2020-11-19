var obj = JSON.parse($response.body);
obj.displayMembership = true;
$done({body: JSON.stringify(obj)});