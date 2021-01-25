// var app = require('express')(); // Create an instance of an Express app
// var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

// mobileApp.tables.add('TodoItem'); // Create a table for 'TodoItem' with default settings

// app.use(mobileApp);
// app.listen(process.env.PORT || 3000);


var express = require('express'),
    azureMobileApps = require('azure-mobile-apps');

var app = express(),
    mobile = azureMobileApps();

// Define the database schema that is exposed
mobile.tables.import('./tables');

// Provide initialization of any tables that are statically defined
mobile.tables.initialize().then(function () {
    // Add the mobile API so it is accessible as a Web API
    app.use(mobile);

    // Start listening on HTTP
    app.listen(process.env.PORT || 3000);
});