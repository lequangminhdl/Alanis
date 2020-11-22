var obj = JSON.parse($response.body);
obj = {
 "response_groups" : [
    "always-returned",
    "prospect_benefits_status",
    "member_giving_status"
  ],
  "customer_status" : {
    "is_eligible_member_giver" : true,
    "member_giving" : "MemberGivingIneligible",
    "prospect_benefit" : "ProspectIneligible"
  }
};
$done({body: JSON.stringify(obj)});