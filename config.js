module.exports = {
	secret: 'super-secret',
	database: 'mongodb://127.0.0.1:27017/authentication',
	saltRounds : 10,
	smtpConfig: {
        host: 'smtp.zoho.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'heri@heri.co',
            pass: 'K3rJgkKRyj5R'
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    }
};