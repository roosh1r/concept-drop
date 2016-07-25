angular.module('fService', [])
  .factory('fService', function () {

    var formService = {};

    var formTypeDict = {    //Setting a type dictionary to easily get IDs for http request
      'presentation': '6',
      'keynote': '7',
      'infographic': '8',
      'onepager': '9',
      'flyerad': '10',
      'html5pitch': '11',
      'email': '12',
      'logo': '13',
      'brochure': '16'
    };

    formService.getRequestID = function(type) {
      return formTypeDict[type];
    };

    formService.getValues = function(OrderFields){
      OrderFields.forEach(function(key){
        var tempVals = key.Values;
        var tempMods = key.PriceModifiers;
        if (tempVals !== null) {
          key.Values = (tempVals.replace(/[[\]\']/g,'')).split(',');
          if (tempMods !== null && tempMods !== 'Formula') {
            tempMods = (tempMods.replace(/[[\]]/g,'')).replace(/\s/g,'');
            key.PriceModifiers = JSON.parse('[' + tempMods + ']');
          }
          console.log(key.PriceModifiers);
        }
      });
    };

    return formService;

});
