var obj = JSON.parse($response.body);
obj.result.user.bill = {
		"subscription": "premium",
		"endDate": "2029-05-07T10:28:22+0000"
	};
$done({body: JSON.stringify(obj)});