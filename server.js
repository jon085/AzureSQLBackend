var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Book'); // Create a table for 'Book' with default settings
mobileApp.tables.add('Users');// Create a table association
mobileApp.tables.add('TravelRecord');// Create a table association
mobileApp.tables.add('Post');// Create a table association

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
