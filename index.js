const express = require('express');

let app = express(); // let is for block scope and var use as global scope

app.use((request,response,next)=>{
	request.user= {name: 'Zalak'};
	next();
});

app.get('/hello',(request,response) => {
	response.send(`Hello ${request.user.name}`);
});

app.listen(3000);