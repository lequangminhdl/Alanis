var obj = JSON.parse($response.body);
obj = {
  "is_premium" : 1,
  "ref_code_done" : 1,
  "data-premium" : {
    "session-count-down" : "2592000",
    "end_at" : "2070-12-22 14:22:00",
    "premium" : 1
  },
  "premium_without_pay" : 0,
  "role" : 1,
};
done({body: JSON.stringify(obj)});
