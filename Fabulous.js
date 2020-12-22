var obj = JSON.parse($response.body);
obj= {
  "properties" : {
	"SubscriptionCurrentProductId" : "fab.subs.annual.discount.49",
    "conditionTrialExpireCardPremiumswitches" : "v2_trial_expire_interstitial_premiumswitches",
    "conditionSphereDialogSubscriptionv2" : "Subscription_V4_time_decoy",
    "network" : "Organic",
    "conditionTransformEditorial" : "V1_transform",
    "conditionCongratGuestpassExposure" : "Variant_3",
    "conditionFsslDates051020" : "V6_2030",
    "conditionEmailProgressPremiumhabitmapD1" : "v0_control",
    "adid" : "00e7f010eaeadeff5464f460397fd839",
    "trackerToken" : "podv7l",
    "conditionDormantReminder" : "v1_dormant_reminder_only",
    "isWatchOwner" : "false",
    "SubscriptionInitialProductId" : "fab.subs.annual.discount.49",
    "conditionFullsphereDiscount" : "29",
    "conditionDialogsPremiumswitches" : "v2_premiumswitches_half",
    "isPremium" : "true",
    "idfa" : "00000000-0000-0000-0000-000000000000",
    "isOrganic" : true,
    "conditionFullsphereFreebar" : "Free Bar",
    "isWebSubscriber" : true,
    "conditionHabitLimitWarningPremiumIteration2" : "v2_5limit"
  }
};
$done({body: JSON.stringify(obj)});
