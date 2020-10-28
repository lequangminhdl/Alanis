var obj = JSON.parse($response.body);

 obj = {
  "num_sessions_remaining_to_unlock" : 0,
  "tier" : 4,
  "active" : null,
  "leaderboard" : {
    "ruleset" : {
      "cohort_type" : "RANDOM",
      "tiered" : true,
      "cohort_size" : 30,
      "goals" : null,
      "score_type" : "XP"
    },
    "active_contest" : {
      "contest_id" : "c5b85d7f-ba53-4e7a-9c2e-753f346ade1d",
      "contest_end" : "2030-11-02T00:00:00Z",
      "registration_state" : "OPEN",
      "registration_end" : "2030-11-01T00:00:00Z",
      "contest_start" : "2020-10-26T00:00:00Z",
      "ruleset" : {
        "cohort_type" : "RANDOM",
        "tiered" : true,
        "cohort_size" : 30,
        "goals" : null,
        "score_type" : "XP"
      },
      "contest_state" : "ACTIVE"
    }
  },
  "ended" : []
 };

$done({body: JSON.stringify(obj)});