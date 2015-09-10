var Contact = Contact || {};

Contact = (function (self) {

        self.Contact = function ( gender,firstName,lastName ) {
        var firstName;
        var lastName;
        var gender;
        var mails = [];
        var phones = [];

        this.gender = function () {
            return gender ;
            };
        this.firstName = function () {
            return firstName ;
        };
        this.lastName = function () {
            return lastName ;
        };
        this.mails = function() {
            return mails;
        }
            this.phones = function() {
                return phones;
            }
        this.setGender = function (gender) {
            this.gender = gender ;
        };
        this.setFirstName = function (firstName) {
            this.firstName = firstName;
        };
        this.setLastName = function (lastName) {
            this.lastName = lastName;
        };
        this.addMail = function(mailAdress) {
            mails.push(mailAdress);
        }
        this.addPhone = function(number){
            phones.push(number);
        }

        var process = function ()
        { };

        var init = function (gender,firstName,lastName ) {
            this.gender = gender;
            this.firstName = firstName;
            this.lastName = lastName;
        }

        init ( gender,firstName,lastName  ) ;
        };
    self.Gender = {
        MR : 0,
        MRS : 1
    }

    return self ;

    }( Contact || {}) ) ;