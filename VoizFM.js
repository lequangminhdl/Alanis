let obj = JSON.parse($response.body);
obj= {
"data" : {
    "user_infor" : {
      "id" : 106784,
      "purchase_vip_package" : null,
      "access_token" : "hXxYF8AWM60xKPdWfCxNRA",
      "user" : {
        "birthday" : null,
        "country_code" : "",
        "coin_introduce" : true,
        "oauth2" : "google",
        "app_rating" : false,
        "verified_phone_number" : true,
        "last_name" : "Minh",
        "avatar_url" : "https://wewe-production.s3.cloud.cmctelecom.vn/avatars/avatars/normal/a5cd393914bd6344f98b64bade20724450a24d6b.?1606115302",
        "first_login" : false,
        "verified" : true,
        "need_password_to_sync" : null,
        "id" : 84367,
        "gender" : "male",
        "email" : "lequangminhdl@gmail.com",
        "full_name" : "Minh Le Quang",
        "phone_number" : "",
        "vip_listening_times" : 0,
        "introductory_code" : "WTPCG5",
        "user_vip_package" : {
          "start_date" : "23-11-2020",
          "end_date" : "28-11-2020",
          "name" : "Gói VIP \u001dquà tặng",
          "package_type" : "vip_reward",
          "remaining_date" : 5
        },
        "coins" : 0,
        "access_token" : "hXxYF8AWM60xKPdWfCxNRA",
        "first_name" : "Le Quang",
        "oauth2_id" : "109830103947322911242"
      }
    }
  }
};
$done({body: JSON.stringify(obj)});
