var obj = JSON.parse($response.body);
obj.subscriber = {
"subscriptions" : {
      "com.laubrothersllc.BabyArt.autoalbums3daytrial" : {
        "is_sandbox" : false,
        "period_type" : "normal",
        "billing_issues_detected_at" : null,
        "unsubscribe_detected_at" : null,
        "expires_date" : "2090-02-18T07:52:54Z",
        "original_purchase_date" : "2020-02-11T07:52:55Z",
        "purchase_date" : "2020-02-11T07:52:54Z",
        "store" : "app_store"
      }
    },
"entitlements" : {
      "unlimited" : {
        "expires_date" : "2090-02-18T07:52:54Z",
        "product_identifier" : "com.laubrothersllc.BabyArt.autoalbums3daytrial",
        "purchase_date" : "2020-02-11T07:52:54Z"
      }
    },
$done({body: JSON.stringify(obj)});