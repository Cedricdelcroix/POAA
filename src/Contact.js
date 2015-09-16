var Contact = Contact || {};

Contact = (function (self) {

        self.Contact = function ( gender,firstName,lastName,id ) {
        var firstName;
        var lastName;
        var gender;
        var mails = [];
        var phones = [];
        var id;

        this.id = function () {
            return id;
        };
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
            this.id ='xxxx-xxxx-xxxx-xxxx-xxxx'.replace(/x/g, function (c) {
                var r = Math . random () *16|0 , v = c =='x'?r:(r&0x3|0x8) ;
                return v. toString (16) ;
               }) ;
        }

        init ( gender,firstName,lastName,id  ) ;
        };
    self.Gender = {
        MR : 0,
        MRS : 1
    }

    return self ;

    }( Contact || {}) ) ;