var obj = JSON.parse($response.body);
obj.response = {
   "is_check" : "1",
	"limit_times_type" : {
      "login_limit_times" : 0,
      "ad_limit_times" : 0,
      "register_limit_times" : 0,
      "share_limit_times" : 0,
      "identify_limit_times" : 0
    },
    "left_times_type_daily" : {
      "share_limit_times" : 0,
      "ad_limit_times" : 0
    },
};
$done({body: JSON.stringify(obj)});
