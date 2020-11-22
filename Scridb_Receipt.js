var obj = JSON.parse($response.body);
obj.result = {
    "membership_info" : {
      "status" : "member",
      "credit_cache_bust" : "f5f256b6e6ed42f9718b071a5730587e",
      "bill_date" : 1632530288,
      "has_pmp_access" : true,
      "bill_method" : "credit card",
      "next_bill_price" : {
        "value" : 84.989999999999995,
        "currency" : "USD"
      }
    },
    "is_referral_creditable" : true,
    "credit_next_accrual_date" : 1606264688,
};
$done({body: JSON.stringify(obj)});