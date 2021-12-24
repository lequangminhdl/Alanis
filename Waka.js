let obj = JSON.parse($response.body);
let url = $request.url;
const cons1 = "loginViaVegaIDAccount/";
const cons2 = "getUserMark/";

if(url.endsWith(cons1)) {
obj["point"] = 100000;
}

if(url.endsWith(cons2)) {
obj["data"]["point"] = 100000;
}

$done({body: JSON.stringify(obj)});
