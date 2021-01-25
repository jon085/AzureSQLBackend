// ----------------------------------------------------------------------------
// Copyright (c) 2015 Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------

// Note: This has been adapted from the Azure Sample:
// https://github.com/azure/azure-mobile-apps-node/tree/master/samples/todo

var azureMobileApps = require('azure-mobile-apps');
const accessRights = {anonymous: "anonymous", authenticated: "authenticated", disabled: "disabled"}; //Table Access Parameters

// Link with table name
azureMobileApps.tables.add('TodoItem');

// Create a new table definition
var table = azureMobileApps.table();

// Configure the table schema - there are two options:
//  1) A Static schema

//table.columns = {
//  "userId": "string",
//  "text": "string",
//  "complete": "boolean"
//};

//  2) A Dynamic schema
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