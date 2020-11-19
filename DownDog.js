var obj = JSON.parse($response.body);
obj = {
"subscriptions" : [
    {
      "endDate" : "14 Dec 2090",
      "planButtonSubtext" : "Expiring 14 Dec 2090"
      }
  ],
};
$done({body: JSON.stringify(obj)});