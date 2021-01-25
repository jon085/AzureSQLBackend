use strict
var express = require('express'),
    azureMobileApps = require('azure-mobile-apps');

var app = express(),
    mobile = azureMobileApps();

mobile.homePage = true; //
// Define the database schema that is exposed
mobile.tables.import('./tables');

// Provide initialization of any tables that are statically defined
mobile.tables.initialize().then(function () {
    // Add the mobile API so it is accessible as a Web API
    app.use(mobile);

    // Start listening on HTTP
    app.listen(process.env.PORT || 3000);
});
