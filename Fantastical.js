/*
^https:\/\/api\.flexibits\.com\/v1\/(auth|account)\/(device|details|appstore-receipt)\/$ url script-response-body fantastical.js
hostname=api.flexibits.com
*/

let url=$request.url;
let obj=JSON.parse($response.body);

if(url.indexOf('details')!=-1){

  obj.subscription={
		"autorenew": true,
		"expiration": "2099-12-31T16:49:37.000000Z",
		"uuid": "f1da7c78-e964-4367-915c-886edc794959",
		"subscription_type": "AppStore",
		"is_expired": false,
		"trial": false
  };
}

$done({body:JSON.stringify(obj)});
