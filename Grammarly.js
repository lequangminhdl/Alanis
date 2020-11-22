var obj = JSON.parse($response.body);
obj = {
"isPremium" : true,
  "currentPlan" : {
    "regularPlanId" : 5,
    "regularPrice" : 139.94999999999999,
    "regularPriceMoney" : {
      "currency" : "USD",
      "value" : 139.94999999999999
    },
    "id" : 5,
    "price" : 139.94999999999999,
    "title" : "Lifetime",
    "firstThreeMonthsPromo" : 0,
    "priceMoney" : {
      "currency" : "USD",
      "value" : 139.94999999999999
    },
    "description" : "1-year Grammarly Subscription",
    "periodMonths" : 12,
    "hasTrial" : false
  },
  "customerSince" : "Dec 9, 2018 1:23:57 PM",
  "nextPayDate" : "Oct 9, 2084 6:40:59 AM",
  "isAppleSubscription" : false,
  "isCancelled" : false
};
$done({body: JSON.stringify(obj)});
