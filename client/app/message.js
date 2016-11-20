"use strict";
var Message = (function () {
    function Message(name, email, subject, message) {
        if (name === void 0) { name = ''; }
        if (email === void 0) { email = ''; }
        if (subject === void 0) { subject = ''; }
        if (message === void 0) { message = ''; }
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }
    return Message;
}());
exports.Message = Message;
