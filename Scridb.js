var obj = JSON.parse($response.body);
obj.result = {
   "membership_info" : {
      "status" : "member",
      "resume_date" : null,
      "credit_cache_bust" : "c3b1895ab5c2fb817ea750a9768aa1b8",
      "bill_date" : 1606787286,
      "pays_additional_tax" : true,
      "has_pmp_access" : true,
      "end_date" : null,
      "bill_method" : "credit card",
      "next_bill_price" : {
        "value" : 8.9900000000000002,
        "currency" : "USD"
      }
    "is_referral_creditable" : true,
    "credit_next_accrual_date" : 1606787286,
    "is_paused" : false,
};
$done({body: JSON.stringify(obj)});
