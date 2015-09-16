var Contact = Contact || {};

Contact = (function (self) {

    self.FromNameSearchStrategy = function ( firstName,lastName ) {
        var firstName;
        var lastName;
        this.search = function (contacts) {
            for(var i=0; i<contacts.length; i++ ){
                if(contacts[i].firstName() == firstName && contacts[i].lastName() == lastName){
                    return contacts[i];
                }else{
                    return null;
                }
            }
        };

        var init = function (firstName,lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        init ( firstName,lastName ) ;
    };

    self.FromMailSearchStrategy = function ( mail ) {
        var mail;
        this.search = function (contacts) {
            for(var i=0; i<contacts.length; i++ ){
                for(var j=0; j<contacts[i].mails().length;j++){
                    if (contacts[i].mails()[j].mailAddress == this.mail){
                        return contacts[i];
                    }else{
                        return null;
                    }
                }
            }
        };


        var init = function (mail) {;
            this.mail = mail;
        }

        init ( mail ) ;
    };
    self.FromPhoneSearchStrategy = function ( phone ) {
        var phone;
        this.search = function (contacts) {
            for(var i=0; i<contacts.length; i++ ){
                for(var j=0; j<contacts[i].phones().length;j++){
                    if (contacts[i].phones()[j].number() == phone){
                        return contacts[i];
                    }else{
                        return null;
                    }
                }
            }
        };

        var init = function (phone) {
            this.phones = phone;
        }

        init ( phone ) ;
    };
    return self ;

}( Contact || {}) ) ;

