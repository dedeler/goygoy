module.exports = {
	PORT 					 : process.env.PORT || 3169, //fantastic port :)
	IP 					     : process.env.IP,
	DB_URL                   : "mongodb://127.0.0.1:27017/goygoy",
	SECURED_URL_MATCHERS	 : [],
	WEB_APP_PATH             : "/webContent", // Without a '/' at the end but at the start!
	WELCOME_PAGE             : "index.html"
};