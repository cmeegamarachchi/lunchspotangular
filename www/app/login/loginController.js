(function(app) {

    'user strict';

    function loginController() {

        var self = this;

        self.name = 'chintana';

    }

    app.controller('loginController', [loginController]);

})(lunchSpotApp);