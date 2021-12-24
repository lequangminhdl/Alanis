var obj = JSON.parse($response.body);
obj.data.is_validated = true;
$done({body: JSON.stringify(obj)});