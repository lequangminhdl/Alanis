var body = $response.body;
var url = $request.url;
var obj = JSON.parse($response.body);

 obj = {
  "num_sessions_remaining_to_unlock" : 0,
  "tier" : 4,
  "leaderboard" : {
      "active_contest" : {
      "contest_end" : "2030-11-02T00:00:00Z",
      "registration_state" : "OPEN",
      "registration_end" : "2030-11-01T00:00:00Z",
      "contest_start" : "2020-10-26T00:00:00Z",
      "contest_state" : "ACTIVE"
    }
  },
  "ended" : []
 };

body = JSON.stringify(obj);
$done({body});
