var obj = JSON.parse($response.body);
obj =  {
  "is_netplus" : 1,
  "point" : 1000000
};
$done({body: JSON.stringify(obj)});
