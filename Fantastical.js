var obj = JSON.parse($response.body);
obj = {
	"subscription" : {
		"autorenew": true,
		"expiration": "2099-12-31T16:49:37.000000Z",
		"uuid": "f1da7c78-e964-4367-915c-886edc794959",
		"subscription_type": "AppStore",
		"is_expired": false,
		"trial": false
	}
	"devices" : [
    {
      "scope" : ["notify", "weather", "keyvalue-watch", "keyvalue-verification", "schedjoules", "scheduling", "account", "keyvalue", "fantastical"]
};
$done({body: JSON.stringify(obj)});