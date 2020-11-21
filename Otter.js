var obj = JSON.parse($response.body);
obj.subscription = {
    "plan_type" : "premium",
    "plan_id" : 10,
    "plan_end_time" : 4608511100,
    "coupon_trial_end_at" : null,
    "cycle_end_at" : 4608511100,
    "discount_type" : "regular",
    "credits" : [

    ],
    "seconds_quota" : 36000,
    "seconds_left" : 36000,
    "coupon" : {

    },
    "new_plan" : null,
    "auto_renew_enabled" : true,
    "payment_platform" : "premium",
    "plan" : {
      "discount_type" : "regular",
      "id" : 10,
      "price" : "99.99",
      "audio_quota" : 6000,
      "display_name" : "Pro (Annual)",
      "type" : "premium",
      "name" : "Premium Plan Annually",
      "cycle" : "month"
    },
    "secondary_subscription" : null,
    "trial_end_at" : null,
    "subscription_id" : 3180252,
    "cycle_start_at" : 4605919100
  };
$done({body: JSON.stringify(obj)});