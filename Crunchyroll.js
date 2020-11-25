var obj = JSON.parse($response.body);
obj.qa_user = false;
$done({body: JSON.stringify(obj)});