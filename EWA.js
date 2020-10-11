var obj = JSON.parse($response.body);

obj.result.user.subscription = "premium";

obj.result.user.bill = {
	"subscription": "premium"
	"createDate": "2019-04-29T10:28:24+0000",
	"startDate": "2019-04-29T10:28:22+0000",
	"endDate": "2029-05-07T10:28:22+0000",
	"daysLeft": 365,
	"period": "6"
	};
$done({body: JSON.stringify(obj)});
