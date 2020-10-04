var obj = JSON.parse($response.body);

obj["info"]["subscriptions"]= [
      {
        "id": 805063,
        "status": "trial",
        "state": "active_trial"
        "product": "unlimited",
        "platform": "apple",
        "starts_at": 1572617692,
        "ends_at": 4099821292,
        "plan_id": "lk.ios.s1m.t1m.p15.v1",
        "duration_unit": "months",
        "duration_value": 1,
        "auto_renew_status": true,        
      }];

$done({body: JSON.stringify(obj)});
