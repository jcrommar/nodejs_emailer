const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
	host: 'smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: 'username', //mailtrap username
		pass: 'password' //mailtrap password
	}
});

// Plain text version
const message = {
	from: 'jcrommar@twitter.com', // Sender address
	to: 'jcrommar@email.com', // List of recipients
	subject: 'How is it going?', // Subject line
	text: 'Hey, wanted to reach out and say hello' // Plain text body
};

//HTML version
const messageHTML = {
	from: 'jcrommar@twitter.com', // Sender address
	to: 'jcrommar@email.com', // List of recipients
	subject: 'How is it going?', // Subject line
	html: '<h1>Have the most fun!</h1><p>Get your <b>iPhone 12</b> today!</p>' // Plain text body
};

// WITH ATTACHMENT 
const messageAttach = {
    ffrom: 'jcrommar@twitter.com', // Sender address
	to: 'jcrommar@email.com', // List of recipients
	subject: 'How is it going?', // Subject line
    html: '<h1>Have the most fun!</h1><p>Get your <b>iPhone 12</b> today!</p>', // Plain text body
    attachments: [
        { // Use a URL as an attachment
          filename: 'your-iphone.png',
          path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fshop%2Fbuy-iphone%2Fiphone-12&psig=AOvVaw0MZgwtTZBcjANSYgKpzPk8&ust=1607669444096000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCVhcPpwu0CFQAAAAAdAAAAABAF'
      }
    ]
};

transport.sendMail(message, function(err, info) {
	if (err) {
		console.log(err)
	} else {
		console.log(info);
	}
});

transport.sendMail(messageHTML, function(err, info) {
	if (err) {
		console.log(err)
	} else {
		console.log(info);
	}
});

transport.sendMail(messageAttach, function(err, info) {
	if (err) {
		console.log(err)
	} else {
		console.log(info);
	}
});
