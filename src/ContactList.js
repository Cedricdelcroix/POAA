var Contact = Contact || {};

Contact = (function (self) {

    self.ContactList = function () {
        var contacts = [];

        this.clear = function() {
            this.contacts = [];
        };

        this.size = function(){
            return this.contacts.length;
        };

        this.add = function(contact){
            this.contacts.push(contact)
        }
        this.get = function(id){
            for(var i=0; i < this.contacts.length; i++){
                if(this.contacts[i].id() == id){
                    return this.contacts[i];
                }
            }
        }
        this.getFromName= function(fistName,name){
            var contacts=[];
            for(var i=0; i<this.contacts.length; i++) {
                if (this.contacts[i].firstName() == fistName && this.contacts[i].lastName() == name) {
                    contacts.push(this.contacts[i])
                }
            }
            if(contacts.length==1){
                return contacts[0]
            }else if(contacts.length ==2){
                return contacts
            }else{
                return null
            }
        };
        this.getFromId= function(id){
            for(var i=0; i< this.contacts.length; i++) {
                if(this.contacts[i].id()== id){
                    return this.contacts[i];
                }
            }
        };
        this.remove = function(id){
            for(var i=0; i<this.contacts.length; i++) {
                if(this.contacts[i].id()==id){
                    this.contacts.splice(i,1)
                }
            }
        }

        this.search = function(strategy){
            return strategy.search(this.contacts);
        }
    };

    return self ;

}( Contact || {}) ) ;