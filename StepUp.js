var body = $response.body;
var url = $request.url;

const path1 = '/book/api/v1/roadmap';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
    obj.data.detail.children.books.blocks["is_lock"] = false;
    body = JSON.stringify(obj);  
 }

$done({body});
