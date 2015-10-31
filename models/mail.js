var mongoose = require('mongoose');

var MailSchema = new mongoose.Schema({
	email: String,
	sender: String,
	message: String
});

mongoose.model('Mail', MailSchema)