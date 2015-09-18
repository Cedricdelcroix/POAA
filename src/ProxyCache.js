/**
 * Created by cedric on 18/09/15.
 */
var Contact = Contact || {};

Contact = (function (self) {
    var listContactList = [];
    var cacheContactList = [];
    self.ProxyCache = function (listContactList) {
        var init = function (allContactList) {
            listContactList = allContactList;
        }
        this.isExist = function(strategy){
            return strategy.search(cacheContactList);
        }
        init ( listContactList ) ;
        this.search = function(strategy){
            if(this.isExist(strategy)==null){
                for(var i=0; i<listContactList.length;i++){
                    for(var j=0; j< listContactList[i].size();j++){
                        var contact = strategy.search(listContactList[i].contacts);
                        if(contact != null){
                            cacheContactList.push(contact);
                            return contact;
                        }else{
                            return null;
                        }
                    }

                }
            }else{
                return this.isExist(strategy);
            }
        }
    };

    return self ;

}( Contact || {}) ) ;