var obj = JSON.parse($response.body);
obj.response.user = {
     "contact_email" : "n774kjerhq@privaterelay.appleid.com",
      "sex" : 2,
      "is_new_user" : true,
      "user_id" : 581336,
      "is_random_nickname" : false,
      "cid" : "bc6c8ea1-6436-92c6-1d9a-61c224566623",
      "is_has_tried" : false,
      "signature" : "",
      "background_url" : "",
      "limit_identify_count" : 0,
      "role" : "premium",
      "nickname" : "Le Minh",
      "status" : 1
};
$done({body: JSON.stringify(obj)});
