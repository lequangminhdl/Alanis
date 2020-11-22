var obj = JSON.parse($response.body);
obj = {
  "sub_end_epoch" : 4631208604,
  "access_expire_epoch" : 4606559509,
  "account_type" : 2,
 };
$done({body: JSON.stringify(obj)});