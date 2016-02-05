angular.module('starter.services', [])

.factory('Users', function(){
  var users = {
    realtors: []
  }; 
  return users;
})

.factory('Clients', function () {
  //******DATA MODEL HERE IS NOT FINAL, REVIEW IS NECESSARY*******
  var clients = [
    {firstName: 'Adrian', lastName: 'Bromfield', reports: {update: 'Oct 23, 2015', report: ''}},
    {firstName: 'Amanda', lastName: 'Smith', reports: {update: 'Oct 20, 2015', report: ''}},
    {firstName: 'Jonathan', lastName: 'Spencer', reports: {update: 'Oct 8, 2015', report: ''}},
    {firstName: 'Jose', lastName: 'Bautista', reports: {update: 'Oct 2, 2015', report: ''}}
  ];
  return {
    clients: clients,
    getClient: function (index) {
      return clients[index]
    }
  };
})

.factory('Todos', function () {
  var todos = [
    {name: 'My To-Do List 1', items: ['Item 1', 'Do Some random action', 'Lorem ipsum dot et']},
    {name: 'My List 2', items: ['More things to do', 'Even more shtuff', 'No that was not a typo']},
    {name: 'My List 3', items: ['Item 1', 'Do Some random action', 'Lorem ipsum dot et']}
  ];
  return {
    todos: todos, 
    getTodo: function (index) {
      return todos[index]
    }
  }
})

.factory('FileService', function () {
    var images;
    var IMAGE_STORAGE_KEY = 'images';

    function getImages() {
        var img = window.localStorage.getItem(IMAGE_STORAGE_KEY);
        if (img) {
            images = JSON.parse(img);
        } else {
            images = [];
        }
        return images;
    };

    function addImage(img) {
        images.push(img);
        alert("Image added: " + img);
        window.localStorage.setItem(IMAGE_STORAGE_KEY, JSON.stringify(images));
    };

    return {
        storeImage: addImage,
        images: getImages
    }
})

.factory('ImageService', function ($cordovaCamera, FileService, $q, $cordovaFile) {
    //distinct id generator for images persisted across app
    function makeid() {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };

    function optionsForType(type) {
        var source;
        switch (type) {
            case 0:
                source = Camera.PictureSourceType.CAMERA;
                break;
            case 1:
                source = Camera.PictureSourceType.PHOTOLIBRARY;
                break;
        }
        return {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: source,
            allowEdit: false, //may switch to true if it works 
            encodingType: Camera.EncodingType.JPEG,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };
    }

    function saveMedia(type) {
        return $q(function (resolve, reject) {
            var options = optionsForType(type);
            console.log(options);

            if (options.sourceType == 0) {
                //do something special for gallery selects
            } else {
                //camera capture
            }

            $cordovaCamera.getPicture(options).then(function (imageUrl) {
                var name, namePath, newName;

                name = imageUrl.substr(imageUrl.lastIndexOf('/') + 1);
                namePath = imageUrl.substr(0, imageUrl.lastIndexOf('/') + 1);
                //testing
                console.log("namePath: " + namePath)

                if (name.indexOf('?') != -1) {
                    name = name.substr(0, name.lastIndexOf('?'));
                    newName = makeid() + name;
                    //testing
                    console.log("newName: " + newName);
                } else {
                    newName = makeid() + name;
                    //testing
                    console.log("newName: " + newName);
                //alert(namePath); console.log(imageUrl);
                }
                

                $cordovaFile.copyFile(namePath, name, cordova.file.dataDirectory, newName)
                    .then(function (info) {
                        FileService.storeImage(newName);
                        alert ("Start storing image" + newName);
                        resolve();
                    }, function (e) {
                        alert("Failed because: " + e.error);
                        reject();
                    });
            });
        })
    }

    return {
        handleMediaDialog: saveMedia
    }
})

.factory('Camera', function ($q) {
  return{
    getPicture: function (options) {
      var q = $q.defer();

      navigator.camera.getPicture(function (result) {
        q.resolve(result);
      }, function(err){
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
