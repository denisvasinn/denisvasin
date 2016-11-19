export class Message {
    constructor(
        public firstName: string = '',
        public lastName: string = '',
        public email: string = '',
        public subject: string = 'From personal web-site',
        public message: string = 'Some text here.'
    ) { }
}