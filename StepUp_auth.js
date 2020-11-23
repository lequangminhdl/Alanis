var obj = JSON.parse($response.body);
obj.result =  {
"data" : {
    "is_acc_tiki" : true,
    "Authorization" : "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIwOTE4NTg5ODg5IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJfaWQiOjE2Nzg0MiwianRpIjoidURlelJrSkxwN3NubHlES1RBbjRKXzE2Nzg0MiIsImlhdCI6MTYwNjEyNTQyOCwiZXhwIjoxOTIxNDg1NDI4fQ.bLd0Yr09KT_ISnjkU-Z4TLEwPCQWsXdd4JRKMtlZ601T4668OR38L6OehcE4RCAIvEwZTS5Dmf2xb28iUO1Z9g",
    "is_acc_ns" : true
  }
};
$done({body: JSON.stringify(obj)});