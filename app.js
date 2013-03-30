properties = require("./properties");// Should be the first, ensure that it is a global variable
var restify = require("restify");
var defaultHandlers = require('./defaultHandlers');
var handlers = require('./handlers');

/* SERVER CONFIGURATION */
var server = restify.createServer({name: "Cevirgec_Server"});
server.use( restify.bodyParser({ mapParams: false }) );        //register body parser
server.use(restify.queryParser({ mapParams: true }));          //register query parser
// server.use( defaultHandlers.authenticationFilter );            //register authentication filter

server.listen(properties.PORT, properties.IP, function() {
  console.log('%s listening at %s', server.name, server.url);
});

server.post('/api/goygoy', handlers.calculateGoygoy);
// Serving static content, ensure to be the last handler
server.get('/.*', defaultHandlers.handleStaticContent);
