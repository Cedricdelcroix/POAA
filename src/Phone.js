var Contact = Contact || {};

Contact = (function (self) {

    self.Phone = function ( number,category,type ) {
        var number;
        var category;
        var type;

        this.number = function () {
            return number;
        };

        this.category = function () {
            return category;
        };
        this.type = function () {
            return type;
        };

        this.setNumber = function (number) {
            this.number = number;
        };
        this.setCategory = function (category) {
            this.category = category;
        };
        this.setType = function (type) {
            this.type = type;
        };



        var process = function ()
        { };

        var init = function (number,category,type) {
            this.mailAddress = mailAddress;
            this.mailCategory = mailCategory;
        }

        init ( number,category,type ) ;
    };
    self.PhoneCategory = {
        PERSO : 0,
        PRO : 1
    };
    self.PhoneType = {
        MOBILE : 0,
        FIXE : 1
    };
    return self ;

}( Contact || {}) ) ;