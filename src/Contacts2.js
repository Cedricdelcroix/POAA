/**
 * Created by cedric on 18/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {

    self.Contacts2 = function () {
        var contacts = [];

        this.clear = function() {
            this.contacts = [];
        };

        this.size = function(){
            return contacts.length;
        };

        this.add = function(contact){
            contacts.push(contact);
        }

    };

    return self ;

}( Contact || {}) ) ;