var obj = JSON.parse($response.body);
obj = {
  "status" : "1",
  "info" : "",
  "data" : [
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
    }
  ]
};
$done({body: JSON.stringify(obj)});