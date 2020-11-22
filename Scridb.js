var obj = JSON.parse($response.body);
obj.result = {
    "state" : "active",
    "limited_validity" : null,
    "next_payment_due" : 41632530288,
    "last_paid_date" : 1600994294,
    "total_price" : {
      "value" : 84.989999999999995,
      "currency" : "USD"
    },
    "can_be_canceled" : false,
    "description" : "Annual recurring membership",
    "type" : "credit card",
    "title" : "Annual Pass",
    "purchase_valid_to" : null,
    "can_be_renewed" : false,
    "subscription" : true,
    "subscription_free_trial_days" : null,
    "product_handle" : "scribd-pmp-annual-subscription",
    "subscription_duration" : "1.year"
};
$done({body: JSON.stringify(obj)});