// ----------------------------------------------------------------------------
// Copyright (c) 2015 Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------

// Note: This has been adapted from the Azure Sample:
// https://github.com/azure/azure-mobile-apps-node/tree/master/samples/todo

var azureMobileApps = require('azure-mobile-apps');
const accessRights = {anonymous: "anonymous", authenticated: "authenticated", disabled: "disabled"}; //Table Access Parameters

// Create a new table definition
var table = azureMobileApps.table();

table.dynamicSchema = true;

// Configure table options
table.access = accessRights.anonymous;
table.read.access = accessRights.anonymous;
table.insert.access = accessRights.anonymous;
table.update.access = accessRights.anonymous;
table.delete.access = accessRights.anonymous;

// Configure specific code when the client does a request
table.read(function (context) {
    return context.execute();
});

table.insert(function (context) {
    return context.execute();
});

table.update(function (context) {
    return context.execute();
});

table.delete(function (context) {
    return context.execute();
});

module.exports = table;
