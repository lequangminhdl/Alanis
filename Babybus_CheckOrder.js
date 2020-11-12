var obj = JSON.parse($response.body);
obj = {
  "status" : "1",
  "info" : "调试信息",
  "data" : [
    {
      "transaction_id" : "",
      "notify_status" : 0,
      "order_status" : 1
    }
  ]
};
$done({body: JSON.stringify(obj)});
