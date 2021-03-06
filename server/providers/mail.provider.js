const emailjs = require('emailjs/email');
const config = require('../../config');

module.exports = {
    server: emailjs.server.connect(config.mail),
    send({name, subject, data, email}) {
        return new Promise((resolve, reject) => {
            this.server.send({
                from: `Personal site`,
                to: `denis.vasin@outlook.com`,
                subject: subject,
                attachment: [
                    {
                        data: `<b>${name}</b> from <a href='mailto:${email}'>${email}</a> said: ${data}`,
                        alternative: true
                    }
                ]
            }, (err, message) => {
                if (err || !message) {
                    reject(err || new Error('!message'));
                }
                resolve();
            });
        });
    }
};
