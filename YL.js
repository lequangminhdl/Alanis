var obj = JSON.parse($response.body);

obj.result.premiumEndDate = "2022-10-15T04:28:21.999582Z";
obj.result.isPremiumActive = true;

$done({body: JSON.stringify(obj)});
