var fs = require('fs');
var path = require('path');
var cache = require('./cache');

module.exports = {
    authenticationFilter: function(req, res, next) {

      /* Ignore paths that are not intented to be secure */
      var shouldBeSecured = false;
      for (var i in properties.SECURED_URL_MATCHERS){
        var matched = req.href.match( properties.SECURED_URL_MATCHERS[i] );
        if(matched != null){
          shouldBeSecured = true;
          break;
        }
      }

      if( !shouldBeSecured ){
        console.log("@authenticationFilter: ignoring " + req.href);
        return next();
      }

      console.log("@authenticationFilter: processing " + req.href);

      switch (req.method) {
      case "POST":
      case "PUT":

          if (req.body) {
              if (req.body.apiKey == properties.CEVIRGEC_ID) {
                  req.isTrusted = true;
                  return next();
              }
              else {
                  console.warn("@authenticationFilter: Invalid apiKey");
                  req.isTrusted = false;
                  res.send({
                      message: "Invalid api key"
                  });
                  return;
              }
          }
          else {
              console.error("@authenticationFilter: No body at all");
              res.send({
                  message: "Authentication required"
              });
              return;
          }
          break;

      case "GET":
      case "HEAD":
          if (req.params) {
              if (req.params.apiKey == properties.CEVIRGEC_ID) {
                  req.isTrusted = true;
                  return next();
              }
              console.warn("@authenticationFilter: Invalid apiKey");
              req.isTrusted = false;
              res.send({
                  message: "Invalid api key"
              });
              return;
          }

          break;
      default:
          console.error("@authenticationFilter: Method not supported");
          res.send({
              message: "Method not supported"
          });
          return;
      }
    },
    handleStaticContent: function(req, res, next) {
      var mimeMap = {
        '.txt': 'text/plain',
        '.html': 'text/html',
        '.htm': 'text/html',
        '.css': 'text/css',
        '.xml': 'application/xml',
        '.json': 'application/json',
        '.js': 'application/javascript',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.png': 'image/png'
      };

      console.log('@staticHandler: serving ' + req.url);

      if(req.url.match("errorPages")){
        var filePath = '.' + req.url;          
      }
      else{
        var filePath = '.' + properties.WEB_APP_PATH + req.url;
        if (filePath == '.' + properties.WEB_APP_PATH + "/" ){
          filePath = '.' + properties.WEB_APP_PATH + '/' + properties.WELCOME_PAGE; // Default page (welcome page)          
        } 
      }

      // Get rid of request paramaters if any
      filePath = filePath.split("?")[0];

      // Decide Content-Type
      var extname = path.extname(filePath);
      var contentType = mimeMap[extname] ? mimeMap[extname] : 'text/html';

      path.exists(filePath, function(exists) {

          if (exists) { 
              var content = cache.get(filePath, {'type':'file'});
              res.writeHead(200, {
                'Content-Type': contentType
              });
              res.end(content, 'utf-8');
          }
          else {// Redirect to 404 page
                res.header('Location', '/errorPages/404.html');
                res.send(302);
          }
      });
    }
};
