var obj = JSON.parse($response.body);
obj = {
 "active_expires_at" : "2084-01-01T00:00:00Z",
  "is_subscription_active" : true,
  "active_subscription_type" : "",
  "is_blocked" : false,
  "has_had_free_trial" : false
};
$done({body: JSON.stringify(obj)});
