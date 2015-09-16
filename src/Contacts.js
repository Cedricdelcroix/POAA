var Contact = Contact || {};

Contact = ( function (self) {
    var pInstance;
    self.Contacts = {


        instance: function () {
            if (!pInstance) pInstance = new Contact.ContactList();
            return pInstance;
        }
    };

    return self;

}(Contact || {}))