var obj = JSON.parse($response.body);

obj = {
"data" : [
    {
      "is_subscribe" : 1,
      "start_time" : 1581442291,
      "is_vip" : true,
      "end_time" : 3790570877
    }
  ]
};
$done({body: JSON.stringify(obj)});
