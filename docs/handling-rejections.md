# Handling Rejections
When a Promise rejects, it will give the following object:
```json
{ "error": "error message" }
```

If the promise fails because of a technical problem with the `request` library, then it will give the full error given by the request promise. The `error` property will still exist.