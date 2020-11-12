var obj = JSON.parse($response.body);
obj = {
  "status" : 1,
  "info" : "请求成功",
  "data" : true
};
$done({body: JSON.stringify(obj)});