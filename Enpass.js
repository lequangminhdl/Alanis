var obj = JSON.parse($response.body);

obj["iaps"]["sale"]= [
      {
        "title":"95% OFF on Onetime License",
        "description":"","available":true,
        "one_time_discount":95.0
      }];

$done({body: JSON.stringify(obj)});