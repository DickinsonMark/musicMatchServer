(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const usersRoutes = require('../routes/users');
    const gameRoutes = require('../routes/game');

    // *** register routes *** //
    app.use('/users', usersRoutes);
    app.use('/game', gameRoutes);

  };

})(module.exports);
