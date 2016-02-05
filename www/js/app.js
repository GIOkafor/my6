// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'starter.directives', 'ngCordova', 'ui.bootstrap'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('home', {
    url: '/home',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('home.dash', {
    url: '/dash',
    views: {
      'home-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('home.login', {
    url: '/login',
    views: {
      'home-dash': {
        templateUrl: 'templates/tab-login.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('home.signup', {
    url: '/signup',
    views: {
      'home-dash': {
        templateUrl: 'templates/tab-signup.html',
        //controller: 'MyCtrl'
      }
    }
  })

  .state('home.realtor-step-1',{
    url: '/signup/realtor',
    views: {
      'home-dash': {
      templateUrl: 'templates/realtor-step-1.html',
      controller: 'RealtorSignUpCtrl'
      }
    }
  })

  .state('home.realtor-step-2',{
    url: '/signup/realtor/realtor-step-2',
    views: {
      'home-dash': {
        templateUrl: 'templates/realtor-step-2.html',
        controller: 'RealtorSignUpCtrl'
      }
    }
  })

  .state('home.realtor-step-3',{
    url: '/signup/realtor/realtor-step-3',
    views: {
      'home-dash': {
        templateUrl: 'templates/realtor-step-3.html',
        controller: 'RealtorSignUpCtrl'
      }
    }
  })

  .state('home.realtor-lastStep',{
    url: '/signup/realtor/realtor-lastStep',
    views: {
      'home-dash': {
        templateUrl: 'templates/realtor-lastStep.html',
        controller: 'RealtorSignUpCtrl'
      }
    }
  })

  .state('home.homeowner-signup',{
    url: '/signup/homeowner',
    views: {
      'home-dash': {
      templateUrl: 'templates/homeowner-signup.html',
      controller: 'HomeownerSignUpCtrl'
      }
    }
  })

  .state('home.client-step1', {
    url: 'signup/homeowner/step1',
    views: {
      'home-dash': {
        templateUrl: 'templates/client-step1.html',
        controller: 'HomeownerSignUpCtrl'
      }
    }
  })

    .state('home.client-step2', {
    url: 'signup/homeowner/step2',
    views: {
      'home-dash': {
        templateUrl: 'templates/client-step2.html',
        controller: 'HomeownerSignUpCtrl'
      }
    }
  })
    //Needs plenty of work, currently not showing anything yet
    //realtor menu
    .state('realtor-dashboard', {
      url: 'realtor-dashboard',
      abstract: true,
      templateUrl: 'templates/realtor-menu.html',
      controller: 'RealtorDashboardCtrl'
    })

    .state('realtor-dashboard.messages', {
    url: '/messages',
    views: {
      'realtor-menu': {
        templateUrl: 'templates/realtor-dashboard-messages.html',
        controller: 'RealtorDashboardCtrl'
      }
    }
  })

    .state('realtor-dashboard.connect-with-clients', {
    url: '/connect-with-clients',
    views: {
      'realtor-menu': {
        templateUrl: 'templates/connect-with-clients.html',
        controller: 'RealtorClientsCtrl'
      }
    }
  })

    .state('realtor-dashboard.select-clients', {
    url: '/select-clients',
    views: {
      'realtor-menu': {
        templateUrl: 'templates/select-clients.html',
        controller: 'RealtorClientsCtrl'
      }
    }
  })

    .state('realtor-dashboard.my-clients', {
    url: '/my-clients',
    views: {
      'realtor-menu': {
        templateUrl: 'templates/my-clients.html',
        controller: 'RealtorClientsCtrl'
      }
    }
  })

    .state('realtor-dashboard.client-details', {
    url: '/:clientdetails',
    views: {
      'realtor-menu': {
        templateUrl: 'templates/client-details.html',
        controller: 'ClientCtrl'
      }
    },
    resolve: {
      client: function ($stateParams, Clients) {
        return Clients.getClient($stateParams.clientdetails)
      }
    }
  })

    .state('realtor-dashboard.reports', {
    url: '/reports',
    views: {
      'realtor-menu': {
        templateUrl: 'templates/reports.html',
        controller: 'RealtorClientsCtrl'
      }
    }
  })

    .state('realtor-dashboard.report-details', {
      url:'/:reportdetails',
      views: {
        'realtor-menu': {
          templateUrl: 'templates/report-details.html',
          controller: 'ClientCtrl'
        }
      },
      resolve: {
        client: function ($stateParams, Clients) {
          return (Clients.getClient($stateParams.reportdetails))
        }
      }
    })

    .state('realtor-dashboard.view-my-profile', {
    url: '/view-my-profile',
    views: {
      'realtor-menu': {
        templateUrl: 'templates/view-my-profile.html',
        controller: 'RealtorDashboardCtrl'
      }
    }
  })
  //Another abstract state for menu
  .state('dashboard',{
    url: 'dashboard',
    abstract:true,
    templateUrl: 'templates/menu.html',
    controller: 'DashboardCtrl'
  })

    .state('dashboard.client-dashboard', {
    url: '/client-dashboard',
    views: {
      'menu': {
        templateUrl: 'templates/client-dashboard.html',
        controller: 'ClientDashboardCtrl'
      }
    }
  })
    
  .state('dashboard.address-details', {
    url: '/address-details',
    views: {
      'menu': {
        templateUrl: 'templates/address-details.html',
        controller: 'ClientDashboardCtrl'
      }
    }
  })

  .state('dashboard.connect-with-my-agent', {
    url: '/connect-with-my-agent',
    views: {
      'menu': {
        templateUrl: 'templates/connect-with-my-agent.html',
        controller: 'ClientDashboardCtrl'
      }
    }
  })

.state('dashboard.real-estate-dictionary', {
    url: '/real-estate-dictionary',
    views: {
      'menu': {
        templateUrl: 'templates/real-estate-dictionary.html',
        controller: 'RealEstateDictionaryCtrl'
      }
    }
  })

.state('dashboard.to-do-list', {
  url: '/todos',
  abstract: true,
  views: {
    'menu': {
      template: '<ion-nav-view name="todos"></ion-nav-view>'
    }
  }
})

.state('dashboard.to-do-list.list', {
    url: '',
    views: {
      'todos': {
        templateUrl: 'templates/to-do-lists.html',
        controller: 'ToDoListCtrl'
      }
    }
  })

.state('dashboard.to-do-list.details', {
    url: '/:todo',
    views: {
      'todos': {
        templateUrl: 'templates/to-do-lists-details.html',
        controller: 'ToDoCtrl'
      }
    }, 
    resolve: {
      todo: function ($stateParams, Todos) {
        return Todos.getTodo($stateParams.todo)
      }
    }
})

  .state('dashboard.room-photos', {
    url: '/room-photos',
    views: {
      'menu': {
        templateUrl: 'templates/room-photos.html',
        controller: 'ImageController'
      }
    }
  })
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home/dash');

});
