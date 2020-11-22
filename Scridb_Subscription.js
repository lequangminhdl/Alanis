var body = $response.body;
var url = $request.url;

const path1 = 'api/v2/payments/current_subscription';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
  obj.result["state"] = "active";
  obj.result["next_payment_due"] = 3632530288;
  obj.result["last_paid_date"] = 1600994294;
  obj.result.total_price["value"] = 84.989999999999995;
  obj.result.total_price["currency"] = "USD";
  obj.result["created_at"] : 1537835888;
  obj.result["can_be_canceled"] : false;
  obj.result["description"] : "Annual recurring membership";
  obj.result["type"] = "credit card";
  obj.result["title"] = "Annual Pass";
  obj.result["purchase_valid_to"] = null;
  obj.result["can_be_renewed"] = false;
  obj.result["subscription"] = true;
  obj.result["subscription_free_trial_days"] = null;
  obj.result["product_handle"] = "scribd-pmp-annual-subscription";
  obj.result["subscription_duration"] = "1.year";
  body = JSON.stringify(obj);  
 }
$done({body});
