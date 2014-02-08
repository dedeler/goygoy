/*
This file is part of Goygoycumuyuz.biz.

Goygoycumuyuz.biz is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Goygoycumuyuz.biz is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Goygoycumuyuz.biz.  If not, see <http://www.gnu.org/licenses/>.
*/

properties = require("./properties");// Should be the first, ensure that it is a global variable
var restify = require("restify");
var handlers = require('./handlers');
var mongoose = require('mongoose');

// Bootstrap db connection
mongoose.connect(properties.DB_URL)

/* SERVER CONFIGURATION */
var server = restify.createServer({name: "Goygoy_Server"});
server.use( restify.bodyParser({ mapParams: false }) );        //register body parser
server.use(restify.queryParser({ mapParams: true }));          //register query parser

process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

server.listen(properties.PORT, properties.IP, function() {
  console.log('%s listening at %s', server.name, server.url);
});

server.get('/api/companies', handlers.companies);
server.post('/api/goygoy', handlers.calculateGoygoy);