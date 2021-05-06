const createError = require('http-errors');
const express = require('express');
const app = express()
const cors = require('cors');
const mysql = require('mysql');
const uploader = require('base64-image-upload');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const privateKey = 'W6iNDVallRODSnnPIjhB';
const {checkToken} = require('./middleware');

// var multer = require("multer");
const connection = mysql.createConnection
(
	{
		host:'localhost',
		user:'root',
		password:'',
		database:'react_assignment'
	}
);
app.use(cors())	
const bodyParser = require('body-parser')
// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
 
app.get('/',function(req,res){
	res.send('Welcome to Api 1');
})
 
app.post("/fileupload", function(req, res) {
	if(req.body.filename==undefined){
		res.send({status:"error",color:'red',message:"File is empty",title:'!error'})
	}

	console.log(req.body.filename)
	let base64String=req.body.filename;
    let base64Image = req.body.filename.split(';base64,');
	console.log(base64Image,"base64imae")
    let extension = base64Image[0].split('/');
    let filename = Date.now()+'.'+extension[1];
	fs.writeFile('./uploads/'+filename,base64Image[1], {encoding:'base64'}, function(err,responce) {
		if(err){
			throw err;
		}		
		res.send({status:"success",color:'green',message:"File uploaded successfully",data:base64String,title:'Success'})		
	});
});

/*
let base64Image = base64String.split(';base64,').pop();
fs.writeFileSync('image.jpeg',base64Image, {encoding:'base64'});*/

app.post('/login',function(req,res){
	let bodybulk=req.body;	
	var query=`SELECT * FROM users where email='${req.body.username}' AND password='${req.body.password}'`;
	connection.query(query, function (err, result) {
		if (err) throw err;
		if(result){
			if(result.length===0){
				res.send({status:"error",message:"Username and password not matched",title:"!Error"})
			}else{
		
				const token = jwt.sign({ id: 1 }, privateKey, { algorithm: 'HS256',expiresIn:60*60});
				let data = {
					token:token,
					expiresIn :60*60
				}				
				res.send({status:"success",message:"User logged in successfully",title:"Success",data:data})
			}			
		}
	});
})
app.post('/register',function(req,res){
	let bodybulk=req.body;
	let fname=req.body.fname
	let lname=req.body.lname
	let email=req.body.email 
	let password=req.body.password 
	var insertQuery=`INSERT INTO users (fname,lname,email,password) VALUES('${fname}','${lname}','${email}','${password}')`;
	connection.query(insertQuery, function (err, result) {
		if (err) throw err;
		if(result){
			res.send({status:"success",bodybulk})
		}
	});
	console.log(insertQuery)
})
app.post('/selectsave',function(req,res){
	let bodybulk=req.body.selectname;
	var insertQuery=`INSERT INTO selectoption (selectname) VALUES('${bodybulk}')`;
	connection.query(insertQuery, function (err, result) {
		if (err) throw err;
		if(result){
			var insertQuery=`SELECT *  FROM selectoption`;
			connection.query(insertQuery, function (err, result) {
				if (err) throw err;
				if(result){

					let resultBulk=result.map((key)=>{
						return {key:key.id,value:key.selectname,text:key.selectname}
					})

					res.send({status:"success", color:"green",message:"Successfully Saved",title:"Saved",data:resultBulk})
				}
			});
		}
	});
}) 


app.post('/deleteselectsave',function(req,res){
	console.log("Hello action")
	let bodybulk=req.body.name;
	var insertQuery=`DELETE FROM selectoption WHERE selectname='${req.body.name}'`;
	connection.query(insertQuery, function (err, result) {
		if (err) throw err;
		if(result){
			var insertQuery=`SELECT *  FROM selectoption`;
			connection.query(insertQuery, function (err, result) {
				if (err) throw err;
				if(result){
					let resultBulk=result.map((key)=>{
							return {key:key.id,value:key.selectname,text:key.selectname}
					})
					res.send({status:"success", color:"green",message:"Successfully Saved",title:"Saved",data:resultBulk})
				}
			});
		}
	});
}) 


app.get('/getcrud', checkToken, function(req,res){
	var insertQuery=`SELECT *  FROM crud`;
	connection.query(insertQuery, function (err, result) {
		if (err) throw err;
		if(result){
			let resultBulk=result.map((key)=>{
					return {key:key.id,fname:key.fname,lname:key.lname,visible:key.visible}
			})
			res.send({status:"success", color:"green",message:"Successfully Saved",title:"Saved",data:resultBulk})
		}
	});
})
app.post('/savecrud', checkToken, function(req,res){

	let bodybulk = req.body.name;
	let visible = req.body.checkedstatus?req.body.checkedstatus:false
	var insertQuery=`INSERT INTO  crud (fname,lname,visible) VALUES('${req.body.fname}','${req.body.lname}',${visible})`;
	// console.log(insertQuery)
	// return false;
	connection.query(insertQuery, function (err, result) {
		if (err) throw err;
		if(result){
			var insertQuery=`SELECT *  FROM crud`;
			connection.query(insertQuery, function (err, result) {
				if (err) throw err;
				if(result){
					let resultBulk=result.map((key)=>{
							return {key:key.id,fname:key.fname,lname:key.lname,visible:key.visible}
					})
					res.send({status:"success", color:"green",message:"Successfully Saved",title:"Saved",data:resultBulk})
				}
			});
		}
	});
}) 


app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  	res.locals.message = err.message;
  	res.locals.error = req.app.get('env') === 'development' ? err : {};
  	res.send({status:"error",message:err.message,title:err.type,color:"red"})
});

app.listen('4000')