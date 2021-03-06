var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Mail = mongoose.model('Mail');
var nodemailer = require('nodemailer');

router.post('/send', function (req, res) {
	//find a way to prevent people from spamming me!
	req.body.created = new Date();
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		// This auth object below works, but is insecure and triggers Gmail security alerts from Google
		auth: {
			user: 'halhassen@gmail.com',
			pass: process.env.EMAIL_PASS
		}

		// This method is much more secure with OAuth2 and is maintained with Google API's Console
		// Still figuring out some bugs with it to properly use my key and info
		// auth: {
		// 	type: 'OAuth2',
		// 	user: 'halhassen@gmail.com',
		// 	clientId: process.env.CLIENT_ID + '.apps.googleusercontent.com',
		// 	clientSecret: process.env.CLIENT_SECRECT + 'FkZi11Aa0BkVyAQYTN3D1J_z'
		// } 
	});

	console.log(transporter);
	var mailOptions = {
    	//from: 'Hamad Alhassen <halhassen@gmail.com>', // sender address
    	to: 'halhassen@gmail.com', // list of receivers
   		subject: 'Personal Website: ' + req.body.email + ' - ' + req.body.created, // Subject line
    	text: req.body.message + ' - ' + req.body.sender, // plaintext body
    	html: req.body.message + '<br> - <strong>' + req.body.sender + '</strong>' // html body
    };

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info){
		if(error){
			return console.log(error);
		}
		console.log('Message sent: ' + info.response);
		res.send()
	});
});

module.exports = router;