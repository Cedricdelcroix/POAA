var Contact = Contact || {};

Contact = (function (self) {

    self.Mail = function ( mailAddress,mailCategory ) {
        var mailAddress;
        var mailCategory;

        this.address = function () {
            return mailAddress;
        };
        this.category = function () {
            return mailCategory;
        };

        this.setMailAddress = function (mailAddress) {
            this.mailAddress = mailAddress;
        };
        this.mailCategory = function (mailCategory) {
            this.mailCategory = mailCategory;
        };



        var process = function ()
        { };

        var init = function (mailAddress,mailCategory) {
            this.mailAddress = mailAddress;
            this.mailCategory = mailCategory;
        }

        init ( mailAddress,mailCategory  ) ;
    };
    self.MailCategory = {
        PERSO : 0,
        PRO : 1
    };

    return self ;

}( Contact || {}) ) ;