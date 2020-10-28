var obj = JSON.parse($response.body);

 obj = {
  "uid" : "kLCxCC8Hn6Quqx2yA7Dxkgc4Mpm2",
  "subscription" : {
    "plan" : "net.plantsnap.freemium.app.yearly.discount.50",
    "validUntil" : "2021-10-07 05:56:31",
    "active" : true
  },
  "userType" : {
    "name" : "subscribed",
    "code" : 1
  }
};

$done({body: JSON.stringify(obj)});
