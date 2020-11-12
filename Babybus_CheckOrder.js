var obj = JSON.parse($response.body);
obj["data"] = [
  {
      "transaction_id" : "",
      "notify_status" : 0,
      "order_status" : 1
     }
],
$done({body: JSON.stringify(obj)});