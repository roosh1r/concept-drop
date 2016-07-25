angular.module('tService', [])
  .factory( 'tService', function($http){

    /*********** Initialize variables ********************/

    var typeService = {};     // The service that this factory will return


    /*********** Functions ******************************/

    // Adding some description for each form based on the type
    typeService.getFormData = function(data) {
      data.forEach( function(item){
        //Wanted to use item description, but decided agianst it
        //item.Description = 'Some ' + item.Type + ' description here';
        item.Icon = getFormIcon(item.Type);
      });
      // Return the data object with a Description property added
      return data;
    };

    typeService.getFormFields = function(reqId) {
      var formFields = {};
      $http.get('http://api.conceptdrop.com/api/OrderForms/' + reqId)
        .success( function (data) {
          formFields = data;
          console.log('form fields json set');
        });
      return formFields;
    };


    /********** Private Inner Functions *****************/

    // To get the appropriate Font Awesome Icon based on the form type
    var getFormIcon = function(type) {
      var icon = '';
      switch(type) {
        case  'Presentation':
          icon = 'fa-file-powerpoint-o';
          break;
        case  'Keynote':
          icon = 'fa-apple';
          break;
        case  'Infographic':
          icon = 'fa-bar-chart';
          break;
        case  'One Pager':
          icon = 'fa-file-o';
          break;
        case  'Flyer/Ad':
          icon = 'fa-newspaper-o';
          break;
        case  'HTML5 Pitch':
          icon = 'fa-html5';
          break;
        case  'Email':
          icon = 'fa-envelope-o';
          break;
        case  'Logo':
          icon = 'fa-file-image-o';
          break;
        case  'Brochure':
          icon = 'fa-map-o';
          break;
        default:
          icon = 'fa-paint-brush';
      }
      return icon;
    };

    return typeService;
  });
