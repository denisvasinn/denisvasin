"use strict";
var Message = (function () {
    function Message(name, email, subject, data) {
        if (name === void 0) { name = ''; }
        if (email === void 0) { email = ''; }
        if (subject === void 0) { subject = ''; }
        if (data === void 0) { data = ''; }
        this.name = name;
        this.email = email;
        this.subject = subject;
        this.data = data;
    }
    return Message;
}());
exports.Message = Message;
