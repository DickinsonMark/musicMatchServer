(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const usersRoutes = require('../routes/users');

    // *** register routes *** //
    app.use('/users', usersRoutes);

  };

})(module.exports);
