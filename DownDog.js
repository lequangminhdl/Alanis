var obj = JSON.parse($response.body);
obj.subscriptions = {
      "active" : true,
      "willBeChargedAgain" : false,
      "endDate" : "14 Dec 2090",
      "startDate" : "18 Nov 2020",
      "canSetAutoRenew" : false,
      "planButtonSubtext" : "Expiring 14 Dec 2090",
      "planButtonText" : "Free Trial (Yoga)",
      "trial" : false
};
$done({body: JSON.stringify(obj)});
