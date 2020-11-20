var obj = JSON.parse($response.body);
obj = {
  "TotalCoin" : 1000000,
  "IsPremium" : true,
  "IsoEndDate" : "01/01/1753 12:00:00 AM"
};
$done({body: JSON.stringify(obj)});
