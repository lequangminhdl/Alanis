var obj = JSON.parse($response.body);
obj.result =  {
  "is_netplus" : 1,
};
$done({body: JSON.stringify(obj)});