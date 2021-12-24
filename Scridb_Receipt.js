var body = $response.body;
var url = $request.url;

const path1 = 'api/v2/(users/account_info|payments/apple_receipt';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
  obj.result.user_subscription.membership_info["status"] = "member";
  obj.result.user_subscription.membership_info["credit_cache_bust"] = "f5f256b6e6ed42f9718b071a5730587e";
  obj.result.user_subscription.membership_info["bill_date"] = 1632530288;
  obj.result.user_subscription.membership_info["has_pmp_access"] = true;
  obj.result.user_subscription.membership_info["bill_method"] = "credit card";
  obj.result.user_subscription.membership_info.next_bill_price["value"] = 84.989999999999995;
  obj.result.user_subscription.membership_info.next_bill_price["currency"] = "USD";
  obj.result.user_subscription.membership_info"is_referral_creditable" : true;
  obj.result.user_subscription.membership_info"credit_next_accrual_date" : 3606264688;
  body = JSON.stringify(obj);  
 }

$done({body});
