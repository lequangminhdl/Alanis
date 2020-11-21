var obj = JSON.parse($response.body);
obj.subscription = {
    "plan_type" : "premium",
    "plan_id" : 10,
    "plan_end_time" : 4608511100,
    "coupon_trial_end_at" : null,
    "cycle_end_at" : 4608511100,
    "discount_type" : "regular",
    "payment_platform" : "premium",
    "plan" : {
      "id" : 10,
      "price" : "99.99",
      "audio_quota" : 6000,
      "display_name" : "Pro (Annual)",
      "type" : "premium",
      "name" : "Premium Plan Annually",
      "cycle" : "month"
    },
    "subscription_id" : 3180252,
    "cycle_start_at" : 1605919100
  };
$done({body: JSON.stringify(obj)});
