// ----------------------------------------------------------------------------
// Copyright (c) 2015 Microsoft Corporation. All rights reserved.
// ----------------------------------------------------------------------------

// Note: This has been adapted from the Azure Sample:
// https://github.com/azure/azure-mobile-apps-node/tree/master/samples/todo

var azureMobileApps = require('azure-mobile-apps');
const { query } = require('express');
const accessRights = {anonymous: "anonymous", authenticated: "authenticated", disabled: "disabled"}; //Table Access Parameters

// Create a new table definition
var table = azureMobileApps.table();

// Configure the table schema - there are two options:
//  1) A Static schema

//Doing so automatically creates the table, and includes default parameters: version createdAt updatedAt
table.columns = {
 "id": "string",
 "text": "string",
 "complete": "boolean",
 "latitude": "double",
 "longitude": "double",
};

//  2) A Dynamic schema [False if creating Columns, Remove table.columns if dynamicSchema == true]
table.dynamicSchema = false;

// Turn on soft delete. [Adds Delete Property in Table] -> Query with IncludeDeleted()
table.softDelete = true;

// Configure table options
table.access = accessRights.anonymous;

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
