var Contact = Contact || {};

Contact = (function (self) {

    self.Builder = function () {

        this.createMinimalContact = function (gender,firstName,lastName) {
            return new Contact.Contact(gender, firstName, lastName);
        };

        this.createContactWithProfessionalMail = function (gender,firstName,lastName,mailAdress){
            var contact = new Contact.Contact(gender, firstName, lastName);
            contact.addMail(new Contact.Mail(mailAdress,Contact.MailCategory.PRO));
            return contact;
        };
        this.createContactWithProfessionalMobile = function (gender,firstName,lastName,number){
            var contact = new Contact.Contact(gender, firstName, lastName);
            contact.addPhone(new Contact.Phone(number,Contact.PhoneCategory.PRO,Contact.PhoneType.MOBILE));
            return contact;
        };
        var process = function ()
        { };

        var init = function () {
        }

        init () ;
    };

    return self ;

}( Contact || {}) ) ;