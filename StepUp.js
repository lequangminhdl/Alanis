body = $response.body.replace(/while.{7}\n/, "");
let obj = JSON.parse(body);
    obj.data.detail.children.books.blocks[["is_lock"]] = false
body = JSON.stringify(obj); 
$done({body});
