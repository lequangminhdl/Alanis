let url=$request.url;
let obj=JSON.parse($response.body);

if(url.indexOf('roadmap')!=-1){
    obj.data.detail.children.books.blocks[["is_lock"]] = false
    };

$done({body:JSON.stringify(obj)});
