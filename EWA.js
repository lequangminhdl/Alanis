var obj = JSON.parse($response.body);
obj.result.user.subscription = "premium";
$done({body: JSON.stringify(obj)});
