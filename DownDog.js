var body = $response.body;
var url = $request.url;

const path1 = '/manifest/';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.subscriptions.active = true;
	obj.subscriptions.willBeChargedAgain = false;
	obj.subscriptions.endDate = "24 Dec 2020";
	obj.subscriptions.startDate = "18 Nov 2020";
	obj.subscriptions.canSetAutoRenew = false;
	obj.subscriptions.planButtonText = "Free Trial (Yoga)";
	obj.subscriptions.trial = true;
	body = JSON.stringify(obj);  
 }
$done({body});
