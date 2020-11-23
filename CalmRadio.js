var obj = JSON.parse($response.body);
obj.license_count = 0,
$done({body: JSON.stringify(obj)});
