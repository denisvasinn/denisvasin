"use strict";
var Message = (function () {
    function Message(firstName, lastName, email, subject, message) {
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (email === void 0) { email = ''; }
        if (subject === void 0) { subject = 'From personal web-site'; }
        if (message === void 0) { message = 'Some text here.'; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
    return Message;
}());
exports.Message = Message;
