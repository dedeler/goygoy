module.exports = {
	PORT 					 : process.env.PORT || 3169, //fantastic port :)
	IP 					     : process.env.IP,
	DB_URL                   : "mongodb://XXX.mongolab.com:33897/heroku_appxxxx",
	SECURED_URL_MATCHERS	 : [],
	WEB_APP_PATH             : "/webContent", // Without a '/' at the end but at the start!
	WELCOME_PAGE             : "index.html"
};