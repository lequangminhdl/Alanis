var obj = JSON.parse($response.body);
obj.response.user = {
      "is_has_tried" : true,
      "role" : "premium",
      "nickname" : "Le Minh",
      "status" : 1
};
$done({body: JSON.stringify(obj)});
