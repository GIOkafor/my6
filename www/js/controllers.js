angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicSlideBoxDelegate) {
  $scope.showFooterToken = 1;

  $scope.slideHasChanged = function(index){
    $scope.slideIndex = index;
  }
})

.controller('SignupCtrl', function ($scope) {
  // body...
})

.controller('RealtorDashboardCtrl', function ($scope) {
  $scope.messages = [
    {name: 'Jane Treehouser', date: 'Oct 23, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jays Street Sale', date: 'Oct 20, 2015', subject: 'Event sometime this week', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Vander Wield', date: 'Oct 18, 2015', subject: 'Wus good', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Russell Martin', date: 'Oct 16, 2015', subject: 'Housewarming Invitation', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jonathan Spencer', date: 'Oct 13, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Adrian Bromfield', date: 'Oct 10, 2015', subject: 'Re: Flood', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jack Jones', date: 'Oct 10, 2015', subject: 'Viewing this weekend', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jill Slurpy', date: 'Oct 8, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jack Trenton(My Agent)', date: 'Oct 8, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'}
  ];

})

.controller('RealtorClientsCtrl', function ($scope, $ionicHistory, Clients) {
  $scope.goBack = function () {
    $ionicHistory.goBack();
  }

  //new input field for username to enter
  $scope.newUserField = function () {
    var userFld = angular.element('<span><input type="text" placeholder="Name"> <input type="text" placeholder="Email"></span>');
    angular.element(userFld).appendTo(".nw");
  }

  $scope.clients = Clients.clients;
})

.controller('ClientCtrl', function ($scope, $ionicHistory, client) {
  $scope.client = client;

  $scope.goBack = function () {
    $ionicHistory.goBack();
  }
})

.controller('DashboardCtrl', function ($scope) {
  $scope.toggleLeft = function ($scope, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.toggleLeft();
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('RealtorSignUpCtrl', function($scope, Users) {
  $scope.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  $scope.years = ['2016', '2017', '2018', '2019', '2020'];

  $scope.countries = ['Canada', 'United States'];

  $scope.canadaProvinces = ['Ontario', 'Quebec', 'Nova Scotia', 'New Brunswick', 'Manitoba', 'British Columbia', 'Prince Edward Island', 'Sasktchewan', 'Alberta', 'Newfoundland and Labrador'];

  $scope.users = Users.realtors;

  $scope.addUser = function (user) {
    $scope.users.push(angular.copy(user));
  };

  /* Theme select stuff*/
  $scope.setUITheme = function(themeName){
    var theme = "Default";
    if(typeof themeName == "string" && themeName != "")
      {theme = themeName; }
    $("#cssThemeLink").attr("href", "css/themes/"+theme+".css");
  };

  //select theme selector container
  var Popup_SW_Agent = document.getElementById("#themeRow");

  //init theme picker 
  var themes = document.getElementsByClassName("Theme");

  $scope.themeSelect = function (event) {
      
    var t = event.target; 
    var themeName = t.attributes['data-theme'];
    //onclick add Selected class and other classes
    t.setAttribute('class', 'Selected ' + themeName.value + ' Theme');
    $scope.setUITheme(themeName.value);
  }

})

.controller('ReportsCtrl', function ($scope) {
  
})

.controller('ReportCtrl', function ($scope, report) {
  
})

.controller('HomeownerSignUpCtrl', function ($scope) {
  $scope.propertyTypes = ['Condo', 'Townhouse', 'Loft', 'Basement', 'Office Building'];
})

.controller('ClientDashboardCtrl', function ($scope) {
  $scope.deleteMessage = function  (message) {
    $scope.messages.splice($scope.messages.indexOf(message),1);

    $scope.toggleLeft = function ($scope, $ionicSideMenuDelegate) {
    $ionicSideMenuDelegate.toggleLeft();
  };

  $scope.address = '123 Fakename St. Toronto, Ontario';
  };

  $scope.messages = [
    {name: 'Jack Trenton(My Agent)', date: 'Oct 23, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jays Street Sale', date: 'Oct 20, 2015', subject: 'Event sometime this week', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Vander Wield', date: 'Oct 18, 2015', subject: 'Wus good', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Russell Martin', date: 'Oct 16, 2015', subject: 'Housewarming Invitation', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jonathan Spencer', date: 'Oct 13, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Adrian Bromfield', date: 'Oct 10, 2015', subject: 'Re: Flood', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jack Jones', date: 'Oct 10, 2015', subject: 'Viewing this weekend', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jill Slurpy', date: 'Oct 8, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'},
    {name: 'Jack Trenton(My Agent)', date: 'Oct 8, 2015', subject: 'Re: Closing date', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget sapien lobortis, aliquet mi et, iaculis sapien. Sed tincidunt nec enim vitae vehicula.'}
  ];
})

.controller('RealEstateDictionaryCtrl', function ($scope) {
  $scope.dictionary = [{
    letter: 'A', words: [
                        {word: 'AGENCY', definition:  "A relationship which arises out of a contract, where an agent is authorized by a principal to engage in certain acts, usually in dealing with one or more third party(s)."}, 
                        {word: 'AGREEMENT OF PURCHASE AND SALE', definition: "A written contract to buy property in which the purchaser and vendor agree to sell upon terms and conditions as set forth in the agreement."},
                        {word: 'Amortization', definition: "The number of years it takes to repay the entire amount of a mortgage."},
                        {word: 'Appraisal', definition: "An estimate of a property's market value, used by lenders in determining the amount of the mortgage."},
                        {word: 'Appreciation', definition: "The increase of a property's value over time."},
                        {word: 'Assessment', definition: "The value of a property set by the local municipality, for the purposes of calculating property tax."},
                        {word: 'Assumable Mortgage', definition:  "A mortgage held on a property by the seller that can be taken over by the buyer, who then accepts responsibility for making the mortgage payments."}
                  ]
  },

  {
    letter: 'B', words: [
                        {word: 'BALANCE DUE ON COMPLETION', definition:  "The amount of money a purchaser will be required to pay to the vendor to complete the purchase, after all adjustments have been made."}, 
                        {word: 'Blended Mortgage', definition: "A combination of two mortgages, one with a higher interest rate than the other, to create a new mortgage with an interest rate somewhere between the two original rates."},
                        {word: 'Blended Mortgage Payments', definition: "Equal or regular mortgage payments, consisting of both a principal and an interest component. With each successive payment, the amount applied to interest decreases and the amount applied to the principal increases, although the total payment doesn't change. (Exception - see variable rate mortgages.)"},
                        {word: 'Bridge Financing', definition: "Money borrowed against a homeowner's equity in a property, usually for a short term, to help finance the purchase of another property or make improvements to a property being sold."},
                        {word: 'Buy-down', definition: "When the seller reduces the interest rate on a mortgage by paying the difference between the reduced rate and market rate directly to the lender or to the purchaser, in one lump sum or monthly installments."}
                  ]
  },

{
  letter: 'C', 
  words: [
    {word: 'Capped rate', definition: "An interest rate with a pre-determined ceiling - usually associated with a variable-rate mortgage."},
    {word: 'Closed mortgage', definition:  "A mortgage that cannot be prepaid, renegotiated or refinanced prior to maturity, unless stated in the agreed terms."},
    {word: 'Closing costs', definition: "Costs that are in addition to the purchase price of a property and which must be paid on the closing date. Examples include legal fees, land transfer taxes, and disbursements."},
    {word: 'Conventional mortgage', definition: "A mortgage where the borrower is contributing more than 20% or more of the value of the property as the down payment."},
    {word: 'Convertible mortgage', definition: "A mortgage that you can change from short-term to long-term, depending on your financial needs."},
    {word: 'CHATTELS', definition: "Moveable possessions and personal property that may be removed without damage to the property, (eg. appliances). "},
    {word: 'CMHC', definition: "The Canada Mortgage and Housing Corporation a Canadian Crown Corporation which administers the National Housing Act. CMHC services include the insuring of high ratio mortgage loans for lenders. "},
    {word: 'Closing', definition: "The real estate transaction's completion, when the parties involved agree that all legal and financial obligations have been met, and the deed to the property is transferred from the seller to the buyer."},
    {word: 'CONDITION PRECEDENT', definition: "An event or action necessary before an agreement becomes binding. "},
    {word: 'CONDITION SUBSEQUENT', definition: "A condition referring to a future event upon the happening of which the contract becomes no longer binding on the parties."},
    {word: 'Condominium', definition: "The ownership of a separate amount of space in a multiple dwelling or other multiple-ownership of common elements used jointly with other owners. "},
    {word: 'Consideration', definition: "Something of value given to make a promise of repayment enforceable. "},
    {word: 'Contract', definition: "An agreement between two or more parties given receipt of lawful consideration to do or refrain from doing an act. "},
    {word: 'Conditional', definition: "subject to one or more conditions or requirements being met; made or granted on certain terms. Conditions are typically used in offers to lease or sale to provide one or more parties the opportunity to review, confirm or verify information with an opportunity to cancel the agreement, without penalty or reprisal."},
    {word: 'Conventional Mortgage', definition: "A first mortgage issued for up to 75 per cent of the property's appraised value or purchase price, whichever is lower."},
    {word: 'Co-operative', definition: "The ownership of a separate amount of space in a multiple dwelling or multiple-occupancy building with proportioned tenancy in common ownership of common elements. Used jointly with other owners, however, the owner does not have clear title to a specific unit, but becomes a shareholder of the corporation which owns all the property and occupies by way of a tenancy agreement subject to shareholders agreement administered by an elected board of directors. "},
    {word: 'Counteroffer', definition: "One party's written response to the other party's offer during purchase negotiations between buyer and seller."},
    {word: 'Covenant', definition: "An agreement contained in an instrument creating an obligation. It may be positive, stipulating the performance of some act. It may be negative or restrictive, forbidding the commission of some act."}
                        //{word: '', definition: ""},
  ]
},

{
  letter: 'D',
  words: [
    {word: 'Date of completion', definition: "The date specified by an agreement of purchase and sale, when the purchaser is to deliver the balance of money due and the vendor to deliver a duly executed deed. "},
    {word: 'Debt Service Ratio', definition:  "The percentage of a borrower's gross income that can be used for housing costs, including mortgage payment and taxes (and condominium fees, when applicable)."},
    {word: 'Deed', definition:  "A legal document that conveys (transfers) ownership of a property to the buyer."},
    {word: 'Deposit', definition: "Payment of money or other valuable consideration as pledge for fulfilment of contract. "},
    {word: 'Down payment', definition: "The money that you pay up-front for the purchase of a home. Down payments typically range from 5%-20% of the total value of the home, 5% is the current minimum. "}
  ]
},

{
  letter: 'E',
  words: [
    {word: 'Easement', definition:  "A legal right to use or cross (right-of-way) another person's land for limited purposes. A common example is a utility company's right to run wires or lay pipe across a property."},
    {word: 'Encroachment', definition:  "An intrusion onto an adjoining property -- such as a neighbor's fence, storage shed or overhanging roof line that partially (or even fully) intrudes onto your property."},
    {word: 'Equity', definition:  "The difference between the price for which a property can be sold and the mortgage(s) on the property. Equity is the owner's 'stake' in a property."}
  ]
},

{
  letter: 'F',
  words: [
    {word: 'Financing, Conditional on', definition: "typically refers to obtaining, acquiring and securing a mortgage with a lender. "},
    {word: 'First Time Home Buyer Credit', definition: "Typically refers to, in Ontario, the credit provided to home buyers who have never owned, or had property under their name, towards the Land Transfer Tax. "},
    {word: 'Foreclosure', definition: "A legal process by which the lender takes possession and ownership of a property when the borrower defaults on the mortgage obligations."},
    {word: 'Freehold', definition: "The ownership of a tract of land on which the building(s) are located. The oldest, most common and most ideal type of ownership of real estate."}
  ]
},

{
  letter: 'H',
  words: [
    {word: 'High-Ratio Mortgage', definition: " A mortgage for more than 75 per cent of a property's appraised value or purchase price."},
    {word: 'Home Inspection', definition: "a non-invasive visual examination of a residential dwelling, performed for a fee, which is designed to identify observed material defects within specific components of said dwelling. Home inspections are typically performed by a professional. An agreement can be conditional on the results of a home inspection report."}
  ]
},

{
  letter: 'L',
  words: [
    {word: 'Land Transfer Tax', definition:  "Payment to the provincial government for transferring property from the seller to the buyer. Ontario currently has a provincial land transfer tax and Toronto has a separate municipal land transfer tax. "},
    {word: 'Lien', definition:  "Any legal claim against a property, filed to ensure payment of a debt."}
  ]
},

{
  letter: 'M',
  words: [
    {word: 'Mortgage', definition: "A loan taken for the purchase of a property. "},
    {word: 'Mortgagee', definition: " The lender."},
    {word: 'Mortgage Insurance', definition: " Government-backed or private-backed insurance protecting the lender against the borrower's default on high-ratio (and other types) of mortgages."},
    {word: 'Mortgagor', definition: " The borrower."},
    {word: 'Mortgage term', definition: "The length of time the interest rate is guaranteed for a mortgage. Mortgage terms normally rate from six months to five years or more, after which you can repay the balance of the principal owning or re-negotiate the mortgage at current rates."},
    {word: 'Multiple Listing Service® (MLS®)', definition: " A system for relaying information to REALTORS® about properties for sale."}
  ]
},

{
  letter: 'P',
  words: [
    {word: 'Prepayment Privilege', definition:  "A mortgage feature that allows the borrower to prepay a portion or all of the principal balance with or without penalty. This privilege is frequently restricted to specific amounts and times."},
    {word: 'Principal', definition:  "The mortgage amount initially borrowed, or the portion still owing on the mortgage. Interest is calculated on the principal amount."},
    {word: 'Property survey', definition: "A legal description of your property and its location and dimensions."}
  ]
},

{
  letter: 'S',
  words: [
    {word: 'Status Certificate', definition:  "A written statement of a condominium unit's current financial and legal status. "},
    {word: 'Status, Conditional on', definition: "Typically refers to a condition providing the opportunity for legal counsel to review a status certificate and provide guidance to a buyer on the purchase of a condominium."}

  ]
},

{
  letter: 'V',
  words: [
    {word: 'Variable-Rate Mortgage', definition:  "A mortgage for which payments are fixed, but whose interest rate changes in relationship to fluctuating market interest rates. If market rates go up, a larger portion of the payment goes to interest. If rates go down, a larger portion of the payment is applied to the principal."},
    {word: 'Vendor-Take-Back Mortgage', definition:  "When sellers use their equity in a property to provide some or all of the mortgage financing in order to sell the property."}
  ]
}, 

{
  letter: 'Z',
  words: [
    {word: 'Zoning Regulation', definition: "Strict guidelines set by municipal governments regulating how a property may or may not be used."}
  ]
}
]
})

.controller('ToDoListCtrl', function  ($scope, Todos) {
  $scope.lists = Todos.todos;
})

.controller('ToDoCtrl', function  ($scope, todo) {
  $scope.todo = todo;

  $scope.updateName = function (name){
    todo.name = name;
  }

  $scope.isCollapsed = true;
})

.controller('ImageController', function ($scope, $cordovaDevice, $cordovaFile, $ionicPlatform, $ionicActionSheet, ImageService, FileService) {
    $ionicPlatform.ready(function () {
        $scope.images = FileService.images();
        //$scope.$apply();
    });

    $scope.urlForImage = function (imageName) {
        var trueOrigin = cordova.file.dataDirectory + imageName;
        return trueOrigin;
    }

    $scope.addMedia = function () {
        $scope.hideSheet = $ionicActionSheet.show({
            buttons: [
                { text: 'Take Photo' },
                { text: 'Photo from library' }
            ],
            titleText: 'Add images',
            cancelText: 'Cancel',
            buttonClicked: function (index) {
                $scope.addImage(index);
            }
        });
    }

    $scope.addImage = function (type) {
        $scope.hideSheet();
        ImageService.handleMediaDialog(type).then(function () {
            $scope.images = FileService.images();
        });
    }
})

.controller('RoomPhotosCtrl', function ($scope, $cordovaFileTransfer, $ionicActionSheet, Camera) {
 //filler images for testing remember to delete
 $scope.images = ["img/max.png","img/mike.png", "img/perry.png", "img/realtor_profile.jpg"];

 $scope.getPhoto = function () {
   console.log('Getting Camera');
   Camera.getPicture({
      quality: 75,
      targetWidth: 320,
      targetHeight: 320,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
   }).then(function(imageURI){
    $scope.images.push(imageURI);
   }, function(err){
        console.err(err);
   });
 } 

//image upload to server
$scope.upload = function(){
  var options = {
    fileKey: "avatar",
    fileName: "image.png",
    chunkedMode: false,
    mimeType: "image/png"
  };
  //upload to (server, src, options)
  $cordovaFileTransfer.upload("http://66.207.206.62:1337/images", "/android_asset/www/img/ionic.png", options).then(function (result) {
    console.log("SUCCESS: " + JSON.stringify(result.response));
  }, function (err) {
    console.log("ERROR: " + JSON.stringify(err));
  }, function (progress) {
    // constant progress updates
  });
}

//options for image upload
$scope.imageOptions = function () {
  // show action sheet
  var hideSheet = $ionicActionSheet.show({
    buttons: [
      {text: 'Take Photo'},
      {text: 'Choose Photo'}
    ],
    cancelText: 'Cancel',
    buttonClicked: function (index) {
      switch(index){
        case 0: 
          //handle take photo
          $scope.getPhoto();
          return true;
        case 1: 
            //handle file select
          $scope.upload();
          return true;
      }
    }
  }); 
}

/*
  $scope.images = [];

  $scope.addImage = function(){
    var options = {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: false,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
    };

    $cordovaCamera.getPicture(options).then(function(imageData){
      onImageSuccess(imageData);

      function onImageSuccess (fileURI) {
        createFileEntry(fileURI);
      }

      function createFileEntry (fileURI) {
        window.resolveLocalFileSystemURL(fileURI, copyFile, fail);
      }

      function copyFile (fileEntry) {
        var name = fileEntry.fullPath.substr(fileEntry.fullPath.lastIndexOf('/') + 1);
        var newName = makeid() + name;

        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (fileSystem2) {
          fileEntry.copyTo(
            fileSystem2,
            newName,
            onCopySuccess,
            fail
          );
        }, fail);
      }

      function onCopySuccess(entry){
        $scope.$apply(function () {
          $scope.images.push(entry.nativeURL);
        });
      }

      function fail(error){
        console.log("fail: " + error.code);
      }

      function makeid(){
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for(var i=0; i < 5; i++){
          text += possible.charAt(Math.floor(Math.random()*possible.length));
        }
        return text;
      }
    }, function (err) {
      console.log(err);
    });
  }

  $scope.urlForImage = function (imageName) {
    var name = imageName.substr(imageName.lastIndexOf('/') + 1);
    var trueOrigin = cordova.file.dataDirectory + name;
    return trueOrigin;
  }
*/
})

.controller('PhotosCtrl', function ($scope, $state) {
    $scope.images = [];

    var cameraOptions = {
    quality: 100,
    destinationType: Camera.DestinationType.DATA_URL,
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    allowEdit: true,
    encodingType: Camera.EncodingType.JPEG,
    targetWidth: 100,
    targetHeight: 100,
    popoverOptions: CameraPopoverOptions,
    saveToPhotoAlbum: false,
    correctOrientation:true
  };

  $scope.takePic = function () {
    navigator.camera.getPicture(function(imageURI){
      console.log("Camera starting");
      $scope.images.push("data:image/jpeg;base64," + imageURI);
    }, function (err) {
      console.log("Error: " + err);
    }, cameraOptions); 
  }
})

//whitelisting for camera purposes
.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
});