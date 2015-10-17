(function(app){
    "use strict";

    function appConfig($stateProvider,
        $urlRouterProvider,
        $compileProvider,
        $mdThemingProvider) {

        function setupLoginState($stateProvider) {

            var loginState = {
                url: '/login',
                abstract: true,
                templateUrl: 'app/login/login.html',
                controller: 'loginController',
                controllerAs: 'loginVm'
            };

            var signInState = {
                url: '/signin',
                templateUrl: 'app/login/sign-in.html'
            };

            var signOnState = {
                url: '/signon',
                templateUrl: 'app/login/sign-on.html'
            };

            var signOnConfirmed = {
                url: '/signconfirm',
                templateUrl: 'app/login/sign-on-confirmed.html'
            };

            $stateProvider.state('login', loginState);
            $stateProvider.state('login.signIn', signInState);
            $stateProvider.state('login.signOn', signOnState);
            $stateProvider.state('login.signOnConfirmed', signOnConfirmed);
        }

        setupLoginState($stateProvider);

        $urlRouterProvider.otherwise('/login/signin');

        $compileProvider.imgSrcSanitizationWhitelist('content/');

        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('orange');
    };

    app.config(['$stateProvider',
        '$urlRouterProvider',
        '$compileProvider',
        '$mdThemingProvider',
        appConfig]);

})(lunchSpotApp);