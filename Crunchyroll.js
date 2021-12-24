var obj = JSON.parse($response.body);
obj.qa_user = true;
$done({body: JSON.stringify(obj)});