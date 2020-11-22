var obj = JSON.parse($response.body);
obj = {
   "result" : {
    "state" : "active",
    "next_payment_due" : 3632530288,
    "last_paid_date" : 1600994294,
    "total_price" : {
      "value" : 84.989999999999995,
      "currency" : "USD"
    },
    "description" : "Annual recurring membership",
    "type" : "credit card",
    "title" : "Annual Pass",
    "subscription" : true,
    "product_handle" : "scribd-pmp-annual-subscription",
    "subscription_duration" : "1.year"
}
};
$done({body: JSON.stringify(obj)});
