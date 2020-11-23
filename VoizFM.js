var obj = JSON.parse($response.body);
var url = $request.url;
var cons = "api/v4/query";
if(url.indexOf(cons) != -1)
obj. = {
  "data" : {
    "updateUserCoinIntroduce" : {
      "id" : 106774,
      "purchase_vip_package" : "v3_production_vip_12_month",
      "access_token" : "YcOWIseJNRp7TBY2pgsJeA",
      "user" : {
        "birthday" : null,
        "country_code" : "",
        "coin_introduce" : true,
        "oauth2" : "google",
        "app_rating" : false,
        "verified_phone_number" : true,
        "last_name" : "Minh",
        "avatar_url" : "https://wewe-production.s3.cloud.cmctelecom.vn/avatars/avatars/normal/a5cd393914bd6344f98b64bade20724450a24d6b.?1606115302",
        "first_login" : true,
        "verified" : true,
        "need_password_to_sync" : null,
        "id" : 84367,
        "gender" : null,
        "email" : "lequangminhdl@gmail.com",
        "full_name" : "Minh Le Quang",
        "phone_number" : "",
        "vip_listening_times" : 0,
        "introductory_code" : "WTPCG5",
        "user_vip_package" : "v3_production_vip_12_month",
        "coins" : 0,
        "access_token" : "YcOWIseJNRp7TBY2pgsJeA",
        "first_name" : "Le Quang",
        "oauth2_id" : "109830103947322911242"
      }
    }
  }
};
$done({body: JSON.stringify(obj)});
