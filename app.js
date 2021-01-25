// // var app = require('express')(); // Create an instance of an Express app
// // var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

// // mobileApp.tables.add('TodoItem'); // Create a table for 'TodoItem' with default settings

// // app.use(mobileApp);
// // app.listen(process.env.PORT || 3000);


// var express = require('express'),
//     azureMobileApps = require('azure-mobile-apps');

// var app = express(),
//     mobile = azureMobileApps();

// // Define the database schema that is exposed
// mobile.tables.import('./tables');

// // Provide initialization of any tables that are statically defined
// mobile.tables.initialize().then(function () {
//     // Add the mobile API so it is accessible as a Web API
//     app.use(mobile);

//     // Start listening on HTTP
//     app.listen(process.env.PORT || 3000);
// });


/******  WHAT *******/


// ----------------------------------------------------------------------------
// Copyright (c) 2015 Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------

use strict

// This is a base-level Azure Mobile App SDK.
var express = require('express'),
    azureMobileApps = require('azure-mobile-apps');

// Set up a standard Express app
var app = express();

// If you are producing a combined Web + Mobile app, then you should handle
// anything like logging, registering middleware, etc. here

// Configuration of the Azure Mobile Apps can be done via an object, the
// environment or an auxiliary file.  For more information, see
// http://azure.github.io/azure-mobile-apps-node/global.html#configuration
var mobile = azureMobileApps({
    // Explicitly enable the Azure Mobile Apps home page
    homePage: true
});

// Import the files from the tables directory to configure the /tables endpoint
mobile.tables.import('./tables');

// Import the files from the api directory to configure the /api endpoint
//! Un-comment if api folder exists
// mobile.api.import('./api');

// Initialize the database before listening for incoming requests
// The tables.initialize() method does the initialization asynchronously
// and returns a Promise.
mobile.tables.initialize()
    .then(function () {
        app.use(mobile);    // Register the Azure Mobile Apps middleware
        app.listen(process.env.PORT || 3000);   // Listen for requests
    });
