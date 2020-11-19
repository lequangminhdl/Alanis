var obj = JSON.parse($response.body);
obj.displayMembership = false;
$done({body: JSON.stringify(obj)});