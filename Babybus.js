var obj = JSON.parse($response.body);
obj["data"] = [
  {
      "order_no" : "160515604007227389",
      "type_code" : "AppStore",
      "pay_sign" : "63C147315D9347827FA1D414E82466F1",
      "pay_data" : {
        "sign" : ""
      },
      "type_name" : "苹果内购",
      "order" : "1605156040207231",
      "provider_code" : "AppStore"
      "transaction_id" : "",
      "notify_status" : 0,
      "order_status" : 1
      "is_subscribe" : 1,
      "start_time" : 1581442291,
      "is_vip" : true,
      "end_time" : 3790570877
    }
],
$done({body: JSON.stringify(obj)});
