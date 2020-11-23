var body = $response.body;
var url = $request.url;

const path1 = '/api/v4/query/';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
    obj.data.user_infor.user.introductory_code = "WTPCG5",
    obj.data.user_infor.user.user_vip_package.start_date = "23-11-2020",
    obj.data.user_infor.user.user_vip_package.end_date = "28-11-2020",
    obj.data.user_infor.user.user_vip_package.name = "Gói VIP \u001dquà tặng",
    obj.data.user_infor.user.user_vip_package.package_type = "vip_reward",
    obj.data.user_infor.user.user_vip_package.remaining_date = 5
	body = JSON.stringify(obj);  
 }

$done({body});
