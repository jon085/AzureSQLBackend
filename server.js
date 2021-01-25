var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Books');
mobileApp.tables.add('TodoItem');
mobileApp.tables.add('TravelRecord');
mobileApp.tables.add('Users');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
