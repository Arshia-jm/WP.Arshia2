const userEmail = prompt("Enter your email");
const regex = /^[a-zA-Z0-9._]{3,25}@\w{2,6}\.[a-z]{2,3}/;
const res = regex.test(userEmail);
alert(res)